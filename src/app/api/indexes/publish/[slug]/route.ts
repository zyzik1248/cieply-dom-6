import { NextResponse } from "next/server";

export async function POST(  
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
          mutation PublishIndex($slug: String) {
            publishIndex(
              where: {slug: $slug},
              to: PUBLISHED
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
      const data = json.data.publishIndex
  
      return NextResponse.json({...data}, {status: 200});
    } catch(error){
      return NextResponse.json({message: "error", error}, {status: 500});
    }
  }