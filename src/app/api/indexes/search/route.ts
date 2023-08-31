import { NextResponse } from "next/server";
import fuzzysort from 'fuzzysort';
import { IndexQuery } from "@/types";

const fuseOptions = {
  all: false,
  threshold: -1000000,
  keys: ["content", "title", "description"]
  
};

export async function POST(req: Request) {
  try{
    const {query} = await req.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/indexes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json()
    const data = json.data.indexes as IndexQuery[]

    const results = fuzzysort.go(query, data, fuseOptions);
    const foundItems = results.map(result => result.obj);

    return NextResponse.json([...foundItems], {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }

}
