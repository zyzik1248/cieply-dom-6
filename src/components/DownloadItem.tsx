import { MaterialQuery } from "@/types"
import Image from "next/image"
import Link from "next/link"

const DownloadItem: React.FC<MaterialQuery> = ({name, id, assets}) =>{
    return(
        <div className="px-big mt-[100px] w-[190px] sm:w-[240px] flex items-center flex-col con">
            <div className="relative h-[120px] shadow-lg mb-5 w-full sm:h-[180px]">
                <Image alt="name" layout="fill" src={`https://media.graphassets.com/output=format:jpg/FRPDg7hQBeG2m3uEufFc`}/>
            </div>
            <Link rel="noopener noreferrer" target="_blank" className="text-center m-auto text-green underline text-sm sm:text-base" href={"https://media.graphassets.com/FRPDg7hQBeG2m3uEufFc"} >{name}</Link>
        </div>
    )
}

export default DownloadItem