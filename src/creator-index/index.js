const cheerio = require('cheerio')
const fs = require('fs/promises');
const path = require('path');

function createIndex(html){
    const loader = cheerio.load(html);
    const span = loader('main span').text();
    const p = loader('main p').text();
    const h1 = loader('main h1').text();
    const h2 = loader('main h2').text();
    const h3 = loader('main h3').text();
    const h4 = loader('main h4').text();
    const h5 = loader('main h5').text();
    const h6 = loader('main h6').text();
    const text = `${p} ${h1} ${h2} ${h3} ${h4} ${h5} ${h6} ${span}`;
    return text
}

async function fetchPage(url){
    const response = await fetch(url)
    const content = await response.text();
    return content
}

async function createIndexByPage(url){
    const content = await fetchPage(url);
    const text = createIndex(content)
    return text
}

async function save(url){
    const dataFilePath = path.join('index.txt');
    const content = await createIndexByPage(url)
    await fs.writeFile(dataFilePath, content, 'utf-8');
}

module.exports = {createIndex, fetchPage, createIndexByPage, save}