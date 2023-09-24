import fuzzysort from "fuzzysort";
import cheerio from "cheerio";
import { IndexQuery } from "@/types";

const fuseOptions = {
  all: false,
  threshold: -1000000,
  keys: ["content", "title", "description"],
};

interface Props{
    url: string
    query: string
}

export async function searchPage({url, query} : Props) {
    try {    
        const resp = await fetch(url);
    
        const html = await resp.text();
        const loader = cheerio.load(html);
        let title = loader("title").text();
    
        if (!title) {
          return {};
        }
    
        const description = loader('meta[name="description"]').attr("content");
    
        const span = loader("main span").text();
        const p = loader("main p").text();
        const h1 = loader("main h1").text();
        const h2 = loader("main h2").text();
        const h3 = loader("main h3").text();
        const h4 = loader("main h4").text();
        const h5 = loader("main h5").text();
        const h6 = loader("main h6").text();
        const li = loader("main li").text();
        const content = `${p} ${h1} ${h2} ${h3} ${h4} ${h5} ${h6} ${span} ${li}`;
    
        const data: IndexQuery = {
          name: title.split(" | ")[1],
          description: description || "",
          content,
          slug: url,
        };
    
        const results = fuzzysort.go(query, [data], fuseOptions);
        const foundItems = results.map((result) => result.obj);
    
        if (foundItems.length) {
          return foundItems[0];
        } else {
          return {}
        }
      } catch (error) {
        console.log(error)
        return {}
      }
}