import DownloadItem from "@/components/DownloadItem";
import PageLayout from "@/components/PageLayout";
import { MaterialQuery } from "@/types";

async function getData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/materials`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate:  1200000}
      });

      const json = await response.json();
      return json
  }

const Download = async () =>{
    const materials: MaterialQuery[] = await getData()

    return(
      <PageLayout title="Materiały do pobrania" bg="materialy">
        <div className="flex flex-wrap">
            {materials.map(material =>(
                <DownloadItem key={material.id} {...material}/>
            ))}
        </div>
      </PageLayout>
    )
}

export default Download