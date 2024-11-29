const fs = require('fs');
const path = require('path');

const getAllPages = () => {
    const pagesDirectory = path.join(process.cwd(), 'pages');
    const pages = fs.readdirSync(pagesDirectory, { withFileTypes: true });
    const pagesList = [];

    const traverse = (pages, prefix = '') => {
        pages.forEach((page) => {
            if (page.isDirectory()) {
                const nestedDirectory = path.join(pagesDirectory, prefix, page.name);
                const nestedPages = fs.readdirSync(nestedDirectory, { withFileTypes: true });
                traverse(nestedPages, path.join(prefix, page.name));
            } else if (page.isFile() && page.name.endsWith('.js')) {
                const pagePath = path.join(prefix, page.name).replace(/\.js$/, '');
                pagesList.push(pagePath === '/index' ? '/' : pagePath);
            }
        });
    };

    traverse(pages);

    return pagesList;
};

module.exports = { getAllPages };
