import { NextResponse } from "next/server";
import fs from 'fs/promises';
import path from 'path';

interface IJson {
  pages:[{
    name: string
    slug: string
    description: string
  }]
}

const dataFilePath = path.join(process.cwd(), 'public', 'pageList.json');

export async function POST(req : Request) {
  try{
    const {name, slug, description} = await req.json()

    if(!name || !slug){
      return NextResponse.json({message: "bad data"}, {status: 500});
    }

    const pageFile = await fs.readFile(dataFilePath, 'utf-8');
    const json: IJson = JSON.parse(pageFile);

    const page = json.pages.find(el => el.slug)

    if(!page){
      json.pages.push({name, slug, description})
      await fs.writeFile(dataFilePath, JSON.stringify(json, null, 2), 'utf-8');
    }

    return NextResponse.json({message: "ok"}, {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }
}

export async function GET() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pageList.json`)
    const json = await response.json();
    return NextResponse.json({...json}, {status: 200});
  } catch(error){
    return NextResponse.json({message: "error", error}, {status: 500});
  }

}
