import { NewsQuery } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
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
          variables: { slug: params.slug },
        }),
      }
    );
    const json = await response.json();
    const data = json.data.news as NewsQuery;
    return NextResponse.json({ ...data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
