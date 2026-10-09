/** @type {import('next').NextConfig} */
const nextConfig = {
  // The nibango marketing landing is a static site generated from the nibango
  // repo (landing/build.py) into public/nibango/: one page per language.
  async rewrites() {
    return [
      { source: '/nibango', destination: '/nibango/index.html' },
      { source: '/nibango/:lang([a-z]{2}(?:-[a-z]+)?)', destination: '/nibango/:lang/index.html' },
    ]
  },
  async redirects() {
    return [
      // English is the root landing page
      { source: '/nibango/en', destination: '/nibango', permanent: true },
      // Curb legal + product pages moved to its own domain (subtrackr = legacy name)
      { source: '/apps/subtrackr', destination: 'https://getcurbapp.com', permanent: true },
      { source: '/apps/subtrackr/privacy', destination: 'https://getcurbapp.com/privacy.html', permanent: true },
      { source: '/apps/subtrackr/terms', destination: 'https://getcurbapp.com/terms.html', permanent: true },
      // Nibango legal pages live on nibango.com
      { source: '/apps/nibango/privacy', destination: 'https://nibango.com/privacy', permanent: true },
      { source: '/apps/nibango/terms', destination: 'https://nibango.com/terms', permanent: true },
    ]
  },
};

export default nextConfig;
