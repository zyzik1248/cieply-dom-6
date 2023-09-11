import NewsDate from "@/components/NewsDate";
import { ArticleQuery, NewsQuery } from "@/types";
import MarkdownIt from "markdown-it";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const newsResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false },
      cache: "no-store"
    });

    const json:  ArticleQuery[] = await newsResponse.json();
    const data = json.map((el: ArticleQuery) => { return { slug: el.attributes.slug } })

    // const indexesResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   next: { revalidate: false },
    //   cache: "no-store"
    // });

    // const indexesJson = await indexesResponse.json();
    // const indexes: NewsQuery[] = indexesJson.data.indexes

    // for (let i = 0; i < data.length; i++) {
    //   const {slug, title, description, content} = json[i].attributes


    //   const newIndex = {
    //     slug,
    //     longSlug: `news/${slug}`,
    //     name: title,
    //     description: description,
    //     content: content
    //   }
      
    //   const foundedItem = indexes.find(el => el.slug === slug)
    //   if (!foundedItem) {
    //     await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({...newIndex}),
    //       next: { revalidate: false },
    //       cache: "no-store"
    //     });
    //   } else {
    //     await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes/${slug}`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({...newIndex}),
    //       next: { revalidate: false },
    //       cache: "no-store"
    //     });
    //   }

    //   await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes/publish/${slug}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     next: { revalidate: false },
    //     cache: "no-store"
    //   });
    // }

    // for(let i =0; i<indexes.length; i++){
    //   const foundedIndex = data.find(el=>el.slug === indexes[i].slug);
    //   if(!foundedIndex){
    //     await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes/${indexes[i].slug}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       next: { revalidate: false },
    //       cache: "no-store"
    //     });
    //   }
    // }

    return data;
  } catch (error) {
    console.log(error)
    return []
  }

}

async function getData(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false },
      cache: "no-store"
    });

    const json = await response.json();
    return json as ArticleQuery;
  } catch (error) {
    console.log(error)
    return null
  }
}

const News: React.FC<any> = async ({ params }) => {
  const props = await getData(params.slug)

  const md = MarkdownIt();
  const html = props ? md.render(props.attributes.content) : "";

  return (
    <div className="max-w-normal relative px-big mt-[50px] mb-[100px]">
      {
        props &&
        <>
          <NewsDate date={new Date(props.attributes.date)} />
          <h1 className="text-xl font-extrabold mt-8 mb-4 sm:text-2xl">{props.attributes.title}</h1>
          <div className="news-wrapper text-base mb-10 sm:text-lg" dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
      }
    </div>
  )
}

export default News;