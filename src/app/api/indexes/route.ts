import { NextResponse } from "next/server";

export async function PUT(req : Request) {
  try{

    return NextResponse.json({message: "ok"}, {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }
}

export async function GET() {
  try{
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query GetIndexes {
          indexes{
            description
            name
            id
            slug
            content {
              text
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
