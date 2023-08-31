import NewsDate from "@/components/NewsDate";
import { NewsQuery } from "@/types";
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

    const data = await newsResponse.json();


    return data.map((el: NewsQuery) => { return { slug: el.slug } });
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
          <div className="text-base mb-10 sm:text-lg" dangerouslySetInnerHTML={{ __html: props.description.html }}></div>
          <div className="relative h-fit">
            <Image className="!relative !h-auto max-w-[1000px] m-auto" alt={props.title} src={props.image.url} layout="fill" objectFit="cover" />
          </div>
        </>
      }
    </div>
  )
}

export default News;