import { MaterialQuery } from "@/types"
import { toBase64 } from "@/utilis/convertToBase64"

const DownloadItem: React.FC<MaterialQuery> = async ({name, asset}) =>{
    const image = await toBase64(asset.preview)

    return(
        <div className="mt-[100px] w-[300px] flex items-center flex-col con">
            <div className="relative shadow-lg mb-5 w-full ">
                <img className="w-full h-full object-contain" src={`data:image/png;base64, ${image}`} alt={name} />
            </div>
            <p className="text-center m-auto text-green text-sm sm:text-base" >{name}</p>
        </div>
    )
}

export default DownloadItem