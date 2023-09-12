import { MaterialQuery } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
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
              query GetMaterial {
                materials {
                  name
                  id
                  asset {
                    id
                    preview:url(transformation: {document: {output: {format: jpg}}})
                    url
                  }
                }
              }`,
        }),
      }
    );

    const json = await response.json();
    const data  = json.data.materials as MaterialQuery[];
    return NextResponse.json([...data ], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
