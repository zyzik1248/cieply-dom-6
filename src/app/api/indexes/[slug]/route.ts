import { NextResponse } from "next/server";

export async function POST(  
    req: Request,
    { params }: { params: { slug: string } }) {
    try{
      const {content, description, name} = await req.json()
      const {slug} = params
  
      const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation UpdateIndex($slug: String, $name: String, $description: String, $content: String) {
            updateIndex(
              data: {content: $content, description: $description, name: $name}
              where: {slug: $slug}
            ){
              id
              name
              slug
              description
              content
              longSlug
            }
          }`,
          variables: {slug, name, description, content}
        }),
      });
  
      const json = await response.json()
      const data = json.data.createIndex
  
      return NextResponse.json({...data}, {status: 200});
    } catch(error){
      return NextResponse.json({message: "error", error}, {status: 500});
    }
  }

  export async function DELETE(  
    req: Request,
    { params }: { params: { slug: string } }) {
    try{
      const {slug} = params
  
      const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation DeleteIndex($slug: String) {
            deleteIndex(
              where: {slug: $slug}
            ){
              id
              name
              slug
              description
              content
              longSlug
            }
          }`,
          variables: {slug}
        }),
      });
  
      const json = await response.json()
      const data = json.data.deleteIndex
  
      return NextResponse.json({...data}, {status: 200});
    } catch(error){
      return NextResponse.json({message: "error", error}, {status: 500});
    }
  }