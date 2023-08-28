// 'use client'

import DownloadItem from "@/components/DownloadItem";
import { MaterialQuery } from "@/types";

async function getData() {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          query GetMaterial {
            material {
              name
              id
              asset {
                id
              }
            }
          }`,
        }),
        next: { revalidate:  1200000}
      });

      const json = await response.json();
      return json.data.material as MaterialQuery [];
  }

const Download = async () =>{
    const materials = await getData()

    return(
        <div className="flex flex-wrap">
            {materials.map(material =>(
                <DownloadItem key={material.id} {...material}/>
            ))}
        </div>
    )
}

export default Download