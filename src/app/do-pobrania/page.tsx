import DownloadItem from "@/components/DownloadItem";
import MaterialsForm from "@/components/MaterialsForm";
import PageLayout from "@/components/PageLayout";
import { MaterialQuery } from "@/types";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Ciepły dom - Ciepły kościół | Do Pobrania',
    description: 'Do pobrania',
  }

async function getData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/materials`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store"
      }
    );

    const json = await response.json();

    return json as MaterialQuery[]
  } catch (error) {
    return []
  }
  }

const Download = async () =>{
    const materials = await getData()

    return(
      <PageLayout title="Materiały do pobrania" bg="materialy">
        <h1 className="text-xl font-extrabold sm:text-2xl">materiały do pobrania wkrótce</h1>
        {/* <div className="flex flex-wrap gap-4 justify-center">
            {materials.map(material =>(
                <DownloadItem key={material.id} {...material}/>
            ))}
        </div>
        <MaterialsForm/> */}
      </PageLayout>
    )
}

export default Download