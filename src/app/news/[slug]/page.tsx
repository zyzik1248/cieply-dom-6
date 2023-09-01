import NewsDate from "@/components/NewsDate";
import { NewsQuery } from "@/types";
import { createIndex } from "@/utilis/createIndex";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const newsResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false }
    });

    const json:  NewsQuery[] = await newsResponse.json();
    const data = json.map((el: NewsQuery) => { return { slug: el.slug } })

    const indexesResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false }
    });

    const indexesJson = await indexesResponse.json();
    const indexes: NewsQuery[] = indexesJson.data.indexes

    for (let i = 0; i < data.length; i++) {
      const {slug, title, description, content} = json[i]

      const newIndex = {
        slug,
        longSlug: `news/${slug}`,
        name: title,
        description: description.text.replace(/(\r\n|\n|\r)/gm, ""),
        content: content.text
      }
      
      const foundedItem = indexes.find(el => el.slug === slug)
      if (!foundedItem) {
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...newIndex}),
          next: { revalidate: false }
        });
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes/${slug}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...newIndex}),
          next: { revalidate: false }
        });
      }

      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes/publish/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: false }
      });
    }

    for(let i =0; i<indexes.length; i++){
      const foundedIndex = json.find(el=>el.slug === indexes[i].slug);
      if(!foundedIndex){
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes/${indexes[i].slug}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          next: { revalidate: false }
        });
      }
    }

    return data;
  } catch (error) {
    console.log(error)
    return []
  }

}

async function getData(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false }
    });

    const json = await response.json();
    return json as NewsQuery;
  } catch (error) {
    console.log(error)
    return null
  }
}

const News: React.FC<any> = async ({ params }) => {
  const props = await getData(params.slug)

  return (
    <div className="max-w-normal relative px-big mt-[50px] mb-[100px]">
      {
        props &&
        <>
          <NewsDate date={new Date(props.date)} />
          <h1 className="text-xl font-extrabold mt-8 mb-4 sm:text-2xl">{props.title}</h1>
          <div className="news-wrapper text-base mb-10 sm:text-lg" dangerouslySetInnerHTML={{ __html: props.content.html }}></div>
        </>
      }
    </div>
  )
}

export default News;