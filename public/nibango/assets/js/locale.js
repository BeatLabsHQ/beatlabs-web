/* nibango landing — where the visitor is, in their words.
   Pure functions (no DOM) so they can be unit-tested with node. The page
   never asks for permissions or calls an IP service: the browser's time zone
   names a city ("Europe/Madrid"), and the language list says how to speak. */
(function (root) {
  'use strict';

  /* Rough rates against the dirham, for illustration only (the app prices
     listings in the seller's currency; nothing here is converted for real). */
  var RATES = {
    AED: 1, EUR: 0.25, USD: 0.27, GBP: 0.21, SAR: 1.02, QAR: 0.99, KWD: 0.083, BHD: 0.10, OMR: 0.105, JOD: 0.19,
    BRL: 1.5, MXN: 5.0, ARS: 290, COP: 1100, CLP: 250, PEN: 1.0, INR: 23, PKR: 76, IDR: 4300, MYR: 1.2, SGD: 0.36,
    PHP: 15.5, JPY: 41, KRW: 370, CNY: 1.95, AUD: 0.41, NZD: 0.45, CAD: 0.37, PLN: 1.05, RUB: 25, SEK: 2.8, NOK: 2.9,
    DKK: 1.85, CHF: 0.23, TRY: 11, CZK: 6.2, HUF: 97, RON: 1.25, EGP: 13, MAD: 2.7, NGN: 420, ZAR: 4.9, KES: 35
  };

  function timeZone() {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { return ''; }
  }

  /* The city for a time zone: exact match first, then any city of the same
     region prefix is NOT assumed (Europe/Lisbon is not Europe/Madrid); the
     default city is the fallback. */
  function cityFor(cities, tz, fallback) {
    var hit = cities[tz];
    if (hit) return hit;
    var base = cities[fallback], name = '';
    /* "Asia/Ho_Chi_Minh" → "Ho Chi Minh": the zone itself names the city. */
    if (tz && tz.indexOf('/') > 0) name = tz.split('/').pop().replace(/_/g, ' ');
    return { name: name, country: base.country, currency: base.currency, hoods: base.hoods };
  }

  /* An empty {city} leaves "Downtown, " or "、" behind: trim the dangling separator. */
  function tidy(text) {
    return String(text).replace(/\s*[,、،]\s*$/, '').replace(/^\s*[,、،]\s*/, '').replace(/\s*[,、،]\s*(?=[)\]]|$)/g, '');
  }

  /* A "nice" number in the visitor's currency: 1,650 AED → 410 EUR, not 412.5. */
  function roundNice(n) {
    if (n >= 100000) return Math.round(n / 1000) * 1000;
    if (n >= 10000) return Math.round(n / 100) * 100;
    if (n >= 1000) return Math.round(n / 50) * 50;
    if (n >= 100) return Math.round(n / 10) * 10;
    return Math.max(1, Math.round(n / 5) * 5);
  }

  function convert(aed, currency) {
    var rate = RATES[currency] || 1;
    return roundNice(aed * rate);
  }

  var INTL_LOCALE = { 'pt-br': 'pt-BR', 'zh-hans': 'zh-Hans' };

  function formatPrice(aed, city, lang) {
    var value = convert(aed, city.currency), locale = INTL_LOCALE[lang] || lang;
    try {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: city.currency, maximumFractionDigits: 0 }).format(value);
    } catch (e) {
      return city.currency + ' ' + value;
    }
  }

  /* "{city} is already selling" → "Madrid is already selling". Unknown keys stay. */
  function fill(tpl, vars) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, k) { return vars && vars[k] !== undefined ? vars[k] : m; });
  }

  /* Browser languages → one of ours ("es-MX" → "es", "pt" → "pt-br", "zh-TW" → none). */
  function pickLanguage(wanted, available) {
    var list = wanted || [];
    for (var i = 0; i < list.length; i++) {
      var tag = String(list[i] || '').toLowerCase(), base = tag.split('-')[0];
      if (available.indexOf(tag) >= 0) return tag;
      if (tag.indexOf('zh') === 0) { if (/hans|cn|sg/.test(tag) || tag === 'zh') return 'zh-hans'; continue; }
      if (base === 'pt') return 'pt-br';
      if (available.indexOf(base) >= 0) return base;
    }
    return null;
  }

  function pageFor(base, lang) {
    return lang === 'en' ? base + '?stay' : base + '/' + lang;
  }

  /* 200 km fills the radar; the square root keeps small radii visible. */
  function ringPercent(km) {
    return Math.round((10 + Math.sqrt(km / 200) * 86) * 10) / 10;
  }

  root.NibangoLocale = {
    RATES: RATES, timeZone: timeZone, cityFor: cityFor, roundNice: roundNice, convert: convert,
    formatPrice: formatPrice, fill: fill, tidy: tidy, pickLanguage: pickLanguage, pageFor: pageFor, ringPercent: ringPercent
  };
}(typeof window !== 'undefined' ? window : module.exports));
