import { NewsQuery } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
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
      });

    const json = await response.json();
    const data  = json.data.pluralNews as NewsQuery[];
    return NextResponse.json([...data ], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}