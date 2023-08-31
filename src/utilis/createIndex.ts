import cheerio from 'cheerio';

export function createIndex(html: string){
    const loader = cheerio.load(html);
    const span = loader('main span').text();
    const p = loader('main p').text();
    const h1 = loader('main h1').text();
    const h2 = loader('main h2').text();
    const h3 = loader('main h3').text();
    const h4 = loader('main h4').text();
    const h5 = loader('main h5').text();
    const h6 = loader('main h6').text();
    const div = loader('main div').text();
    const text = `${p} ${h1} ${h2} ${h3} ${h4} ${h5} ${h6} ${span} ${div}`;
    return text
}