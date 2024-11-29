// scripts/generate-sitemap.js

const { create } = require('xmlbuilder2');
const fs = require('fs');
const path = require('path');

const pages = [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    // Ajoutez d'autres pages ici
    // { url: '/about', changefreq: 'monthly', priority: 0.5 },
];

const domain = 'https://funds.chainsolutions.fr';

const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

pages.forEach(page => {
    const url = sitemap.ele('url');
    url.ele('loc', `${domain}${page.url}`);
    url.ele('changefreq', page.changefreq);
    url.ele('priority', page.priority.toString());
});

const xml = sitemap.end({ prettyPrint: true });

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml);

console.log('Sitemap generated!');
