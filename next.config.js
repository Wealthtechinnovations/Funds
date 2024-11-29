// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/portefeuille/test',
                destination: '/portefeuille/portefeuillereconstitution/retraitcash', // Your actual page path
            },
            /*  {
                  source: "/api/searchFunds",
                  destination: "${urlconstant}/api/searchFunds",
              },
              {
                  source: "/api/lastvalLiq",
                  destination: "${urlconstant}/api/lastvalLiq",
              },
              {
                  source: "/api/ratios",
                  destination: "${urlconstant}/api/ratios",
              },
              {
                  source: "/api/performances",
                  destination: "${urlconstant}/api/performances",
              },
              {
                  source: "/api/comparaison",
                  destination: "${urlconstant}/api/comparaison",
              },
              {
                  source: "/api/valLiq",
                  destination: "${urlconstant}/api/valLiq",
              },
              {
                  source: "/api/recherchefonds",
                  destination: "${urlconstant}/api/recherchefonds",
              },*/
        ];
    },
};
module.exports = nextConfig;