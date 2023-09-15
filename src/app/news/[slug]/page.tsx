import NewsDate from "@/components/NewsDate";
import { NewsQuery } from "@/types";
import { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = false;

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  try {
    const newsResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false },
      cache: "no-store"
    });

    const json:  NewsQuery[] = await newsResponse.json();
    const data = json.map((el: NewsQuery) => { return { slug: el.slug } })

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
      // next: { revalidate: false },
      cache: "no-store"
    });

    const json = await response.json();
    return json as NewsQuery;
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const data = await getData(params.slug);
  let desc = data?.description.text || ""
  desc = desc.replace(/\\n/g, " ")

  return{
    title: `Ciepły dom - Ciepły kościół | ${data?.title}`,
    description: `${desc}`
  }

}

const News: React.FC<any> = async ({ params, searchParams }) => {
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