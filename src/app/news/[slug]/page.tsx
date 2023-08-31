import NewsDate from "@/components/NewsDate";
import PageLayout from "@/components/PageLayout";
import { NewsQuery } from "@/types";
import Image from "next/image";

export const dynamicParams = false;

interface IPrams{
    slug: string
}

export async function generateStaticParams() {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query GetNews1 {
              news1(orderBy: postedDate_ASC) {
                id
                title
                date
                postedDate
                slug
                description {
                  html
                  text
                }
                imagePreview {
                  id
                  url
                }
                image {
                  id
                  url
                }
              }
            }`,
        }),
        next: { revalidate: 1200000 }
      });
    
      const json = await response.json();
      const list = json.data.news1 as NewsQuery[];

      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(list.map(el=>{
          return {slug: `/news/${el.slug}`, description: el.description.text, name: el.title}
        })),
        next: { revalidate: 1200000 }
      })
      
      return list.map(el=>{return{slug: el.slug}})
}
 
async function getData(slug: string) {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetNews($slug: String) {
            news1(where: {slug: $slug}) {
              id
              title
              date
              postedDate
              slug
              description {
                html
                text
              }
              imagePreview {
                id
                url
              }
              image {
                id
                url
              }
            }
          }`,
          variables: {slug}
      }),
      next: { revalidate: 1200000 }
    });

    const json = await response.json();
    return json.data.news1[0] as NewsQuery;
}
 
const News:React.FC<any> = async ({params})=> {
  const {title, date, description, image} = await getData(params.slug)

  return (
        <div className="max-w-normal relative px-big my-[100px]">
          <NewsDate date={new Date(date)}/>
          <h1 className="text-xl font-extrabold mt-8 mb-4 sm:text-2xl">{title}</h1>
          <div className="text-base mb-10 sm:text-lg" dangerouslySetInnerHTML={{ __html: description.html }}></div>
          <div className="relative h-fit">
            <Image className="!relative !h-auto max-w-[1000px] m-auto" alt={title} src={image.url} layout="fill" objectFit="cover"/>
          </div>
        </div>
  )
}

export default News;