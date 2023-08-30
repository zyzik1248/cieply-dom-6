import { NextResponse } from "next/server";
import cheerio from 'cheerio';
import fuzzysort from 'fuzzysort';

const fuseOptions = {
  all: false,
  threshold: -10000000,
};

interface IJson {
  pages:[{
    name: string
    slug: string
    description: string
  }]
}

export async function POST(req: Request) {
  try{
    const {query} = await req.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages`)
    const json: IJson = await response.json();
    const htmls: string[] = []

    const pages = json.pages.map(el=>{
      return el.slug
    })

    for(let i=0; i<pages.length; i++){
      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${pages[i]}`)
      const html = await res.text()
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
      htmls.push(text)
    }

    const results = fuzzysort.go(query, htmls, fuseOptions);
    const matchingIndices = results.map(result => htmls.indexOf(result.target));
    const ids = matchingIndices.map((indice)=>json.pages[indice])

    return NextResponse.json([...ids], {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }

}
