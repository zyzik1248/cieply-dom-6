import { MaterialQuery } from "@/types"
import { toBase64 } from "@/utilis/fileConverter"

const DownloadItem: React.FC<MaterialQuery> = async ({attributes}) =>{
    const {name, asset, preview} = attributes
    const image = await toBase64(`${process.env.NEXT_PUBLIC_SITE_URL}${preview.data.attributes.url}`)

    return(
        <div className="mt-[50px] relative w-[300px] flex items-center flex-col sm:mt-[100px]">
            <div className="relative shadow-lg mb-5 w-full ">
                <img className="w-full h-full object-contain" src={`data:image/png;base64, ${image}`} alt={name} />
            </div>
            <p className="absolute -bottom-[16px] text-center m-auto text-green text-sm sm:text-base" >{name}</p>
        </div>
    )
}

export default DownloadItem