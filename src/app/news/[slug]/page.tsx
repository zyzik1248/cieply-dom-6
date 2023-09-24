import NewsDate from "@/components/NewsDate";
import { NewsQuery } from "@/types";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            query GetPluralNews {
              pluralNews(orderBy: postedDate_ASC) {
                id
                title
                date
                postedDate
                slug
                description {
                    html
                    text
                }
                content {
                  html
                  text
                }
                imagePreview {
                  id
                  url
                }
              }
            }`,
      }),
    });

    const json = await response.json();
    const data = json.data.pluralNews as NewsQuery[];
    return data.map(post => (
      { slug: post.slug }
    ))
  } catch (error) {
    console.log(error)
    return []
  }

}

async function getData(slug: string) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query GetNews($slug: String){
                news(where: {slug: $slug}) {
                id
                title
                date
                postedDate
                slug
                description {
                    html
                    text
                }
                content {
                  html
                  text
                }
                imagePreview {
                  id
                  url
                }
              }
            }`,
          variables: { slug },
        }),
      }
    );
    const json = await response.json();
    const data = json.data.news as NewsQuery;
    return { ...data }
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

  return {
    title: `Ciepły dom - Ciepły kościół | ${data?.title}`,
    description: `${desc}`
  }

}

const News: React.FC<any> = async ({ params, searchParams }) => {
  const props = await getData(params.slug)
  console.log(props)

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