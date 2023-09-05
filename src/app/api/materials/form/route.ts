import { MaterialPostQuery, MaterialQuery } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req : Request) {
  try {
    const {name, count, email} = await req.json()

    const response = await fetch(
      process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation PostFomMaterials($name: String, $count: String, $email: String) {
                createMaterialPost(data: {name: $name, count: $count, email: $email}) {
                  name
                  id
                  count
                  email
                }
              }`,
              variables: {name, count, email}
        }),
      }
    );

    const json = await response.json();
    const data  = json.data.createMaterialPost as MaterialPostQuery;
    return NextResponse.json({...data}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
