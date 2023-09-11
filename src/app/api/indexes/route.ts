import { NextResponse } from "next/server";

export async function PUT(req : Request) {
  try{
    const {content, description, name, slug, longSlug} = await req.json()

    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        mutation PutIndex($slug: String, $name: String, $description: String, $content: String,  $longSlug: String) {
          createIndex(
            data: {content: $content, description: $description, name: $name, slug: $slug, longSlug: $longSlug}
          ){
            id
            name
            slug
            description
            content
            longSlug
          }
        }`,
        variables: {slug, name, description, content, longSlug}
      }),
    });

    const json = await response.json()
    const data = json.data.createIndex

    return NextResponse.json({...data}, {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }
}

export async function GET() {
  try{
    const response = await fetch(process.env.NEXT_PUBLIC_STRAPI_ENDPOINT || "", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Indexes{
          indices{
            data{
              id
              attributes{
                name
                slug
                description
                longSlug
                content
              }
            }
          }
        }`,
      }),
    });

    const json = await response.json()

    return NextResponse.json({...json}, {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }

}
