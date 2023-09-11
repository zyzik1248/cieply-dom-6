import { ArticleQuery } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_STRAPI_ENDPOINT || "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query GetArticles {
                articles(sort: "datePosted:asc") {
                    data {
                      id
                      attributes {
                        title
                        slug
                        date
                        datePosted
                        content
                        description
                        cover {
                          data {
                            id
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }`,
        }),
      });

    const json = await response.json();
    const data  = json.data.articles.data as ArticleQuery[];
    return NextResponse.json([...data ], { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}