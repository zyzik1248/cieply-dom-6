import { NewsQuery } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_ENDPOINT || "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Article($slug: String){
                articles(filters: {slug: {eq: $slug}}){
                    data{
                      id
                      attributes{
                        title
                        slug
                        date
                        datePosted
                        content
                        description
                        cover{
                          data{
                            id
                            attributes{
                              url
                            }
                          }
                        }
                      }
                    }
                  }
            }`,
          variables: { slug: params.slug },
        }),
      }
    );
    const json = await response.json();
    const data = json.data.articles.data[0] as NewsQuery;
    return NextResponse.json({ ...data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
