/* nibango landing — which ad brought the visitor, and where they go next.
   Pure functions (no DOM) so they can be unit-tested with node. Nothing
   personal is read or kept: only the utm_* words of the ad link, held in
   this browser tab (sessionStorage) so a language redirect does not lose them. */
(function (root) {
  'use strict';

  var TOKEN = /^[A-Za-z0-9_.-]{1,64}$/;
  var STORE_KEY = 'nb_campaign';
  /* Parameters carried across the landing's own redirects (language pages). */
  var CARRY = /^(utm_[a-z]+|fbclid)$/;
  /* Ad sources whose phone visitors go straight to their store. */
  var DIRECT_SOURCES = ['meta'];

  function clean(value) {
    return typeof value === 'string' && TOKEN.test(value) ? value : null;
  }

  function params(search) {
    var out = {}, text = String(search || '').replace(/^\?/, '');
    if (!text) return out;
    text.split('&').forEach(function (pair) {
      if (!pair) return;
      var i = pair.indexOf('='), key = i < 0 ? pair : pair.slice(0, i), value = i < 0 ? '' : pair.slice(i + 1);
      try {
        key = decodeURIComponent(key.replace(/\+/g, ' '));
        value = decodeURIComponent(value.replace(/\+/g, ' '));
      } catch (e) { return; }
      if (!(key in out)) out[key] = value;
    });
    return out;
  }

  /* The campaign named by the URL, or null. Source and campaign are both
     needed (that is what the counter stores); medium is optional. */
  function fromSearch(search) {
    var p = params(search), source = clean(p.utm_source), campaign = clean(p.utm_campaign);
    if (!source || !campaign) return null;
    var c = { source: source, campaign: campaign };
    var medium = clean(p.utm_medium);
    if (medium) c.medium = medium;
    return c;
  }

  function utmQuery(c) {
    var parts = ['utm_source=' + encodeURIComponent(c.source)];
    if (c.medium) parts.push('utm_medium=' + encodeURIComponent(c.medium));
    parts.push('utm_campaign=' + encodeURIComponent(c.campaign));
    return parts.join('&');
  }

  /* Adds a query string to a URL that may already have one (and a #hash). */
  function withQuery(url, query) {
    if (!query) return url;
    var hash = '', at = url.indexOf('#');
    if (at >= 0) { hash = url.slice(at); url = url.slice(0, at); }
    var sep = url.indexOf('?') < 0 ? '?' : (/[?&]$/.test(url) ? '' : '&');
    return url + sep + query + hash;
  }

  /* The ad's own parameters, kept when the landing sends the visitor to
     another language page ("/nibango?stay", "/nibango/es"). */
  function carryQuery(url, search) {
    var text = String(search || '').replace(/^\?/, '');
    var kept = text ? text.split('&').filter(function (pair) {
      var key = pair.split('=')[0];
      try { key = decodeURIComponent(key); } catch (e) { return false; }
      return CARRY.test(key);
    }) : [];
    return withQuery(url, kept.join('&'));
  }

  /* Apple's campaign link: /app/apple-store/id…?pt=…&ct=…&mt=8. The
     provider token (pt) is set in landing/build.py; without it the link
     still carries ct. Without a campaign the plain link stays. */
  function appStoreUrl(base, c, providerToken) {
    var id = /id(\d+)/.exec(base);
    if (!c || !id) return base;
    var q = [];
    var pt = clean(providerToken);
    if (pt) q.push('pt=' + pt);
    q.push('ct=' + encodeURIComponent(c.campaign), 'mt=8');
    return 'https://apps.apple.com/app/apple-store/id' + id[1] + '?' + q.join('&');
  }

  /* Google Play passes `referrer` to the Install Referrer API and the Play
     Console's acquisition reports. */
  function playUrl(base, c) {
    return c ? withQuery(base, 'referrer=' + encodeURIComponent(utmQuery(c))) : base;
  }

  function webUrl(base, c) {
    return c ? withQuery(base, utmQuery(c)) : base;
  }

  /* Which store a device belongs to, or null (computers stay on the page).
     iPadOS reports itself as a Mac, but a Mac has no multi-touch screen. */
  function storeForDevice(userAgent, platform, maxTouchPoints) {
    var ua = String(userAgent || '');
    if (/Android/i.test(ua)) return 'google_play';
    if (/iPhone|iPad|iPod/.test(ua)) return 'app_store';
    if (platform === 'MacIntel' && maxTouchPoints > 1) return 'app_store';
    return null;
  }

  /* The store to send an ad visitor to straight away, or null to show the page. */
  function directStore(c, userAgent, platform, maxTouchPoints) {
    if (!c || DIRECT_SOURCES.indexOf(c.source) < 0) return null;
    return storeForDevice(userAgent, platform, maxTouchPoints);
  }

  function payload(event, c, lang) {
    return JSON.stringify({ event: event, source: c.source, campaign: c.campaign, lang: clean(lang) || '' });
  }

  /* sessionStorage may be missing or throw (private mode, blocked storage). */
  function remember(storage, c) {
    try { if (storage && c) storage.setItem(STORE_KEY, JSON.stringify(c)); } catch (e) { /* not kept: fine */ }
  }

  function recall(storage) {
    try {
      var raw = storage && storage.getItem(STORE_KEY), c = raw ? JSON.parse(raw) : null;
      if (!c || !clean(c.source) || !clean(c.campaign)) return null;
      var out = { source: c.source, campaign: c.campaign };
      if (clean(c.medium)) out.medium = c.medium;
      return out;
    } catch (e) {
      return null;
    }
  }

  /* True the first time in this tab for a campaign; then false. Without
     storage it is always true (a reload may count twice; never zero). */
  function firstVisit(storage, c) {
    var key = 'nb_visit_' + c.source + '_' + c.campaign;
    try {
      if (!storage) return true;
      if (storage.getItem(key)) return false;
      storage.setItem(key, '1');
    } catch (e) { /* count it */ }
    return true;
  }

  root.NibangoCampaign = {
    clean: clean, params: params, fromSearch: fromSearch, utmQuery: utmQuery, withQuery: withQuery,
    carryQuery: carryQuery, appStoreUrl: appStoreUrl, playUrl: playUrl, webUrl: webUrl, payload: payload,
    storeForDevice: storeForDevice, directStore: directStore,
    remember: remember, recall: recall, firstVisit: firstVisit
  };
}(typeof window !== 'undefined' ? window : module.exports));
