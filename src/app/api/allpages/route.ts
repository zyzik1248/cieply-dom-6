import { NextResponse } from "next/server";
import convert from "xml-js";

export async function GET(req: Request) {
  try {

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap-0.xml`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/xml",
        },
      }
    );

    const text = await response.text();
    const pagesUrl = convert
      .xml2js(text)
      .elements[0].elements.map(
        (el: any) => el.elements[0].elements[0].text
      ) as (RequestInfo | URL)[];
    
    return NextResponse.json([...pagesUrl], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
