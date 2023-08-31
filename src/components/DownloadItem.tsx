import { MaterialQuery } from "@/types"
import Image from "next/image"
import Link from "next/link"

const DownloadItem: React.FC<MaterialQuery> = ({name, asset}) =>{
    return(
        <div className="px-big mt-[100px] w-[190px] sm:w-[240px] flex items-center flex-col con">
            <div className="relative h-[120px] shadow-lg mb-5 w-full sm:h-[180px]">
                <Image alt="name" layout="fill" src={asset.preview}/>
            </div>
            <p className="text-center m-auto text-green text-sm sm:text-base" >{name}</p>
        </div>
    )
}

export default DownloadItem