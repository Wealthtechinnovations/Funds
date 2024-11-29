const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const fs = require('fs');
const { Readable } = require('stream');
const { getAllPages } = require('./utils'); // Une fonction pour obtenir toutes les pages de votre site Next.js

(async () => {
    const pages = getAllPages(); // Remplacez cela par votre propre logique pour obtenir toutes les pages de votre site Next.js

    const sitemapStream = new SitemapStream({ hostname: 'https://funds.chainsolutions.fr' }); // Remplacez 'https://votresite.com' par l'URL de votre site
    const pipeline = sitemapStream.pipe(createGzip());
    const writeStream = fs.createWriteStream('./public/sitemap.xml.gz'); // Le fichier sitemap sera enregistré dans le répertoire 'public'

    pages.forEach((page) => {
        sitemapStream.write({ url: page, changefreq: 'daily', priority: 0.7 }); // Modifiez les attributs comme vous le souhaitez
    });

    sitemapStream.end();

    await streamToPromise(pipeline);
    pipeline.pipe(writeStream);
})();
