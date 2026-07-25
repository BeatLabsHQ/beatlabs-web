/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
