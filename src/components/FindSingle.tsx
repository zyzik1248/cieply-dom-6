
import { IndexQuery } from "@/types"
import Link from "next/link"
import React from "react"

const FindSingle:React.FC<IndexQuery> = ({name, description, longSlug}) =>{
    description.replace(/[^a-zA-Z ]/g, "")

    return(
        <Link className="max-w-[1000px]" href={`/${longSlug ? longSlug : ""}`}>
            <h3 className="text-xl font-extrabold text-green mb-4 sm:text-2xl">{name}</h3>
            <div className="truncate mb-4" >{description.replace(/\\n/g, " ")}</div>
            <div className="h-[1px] bg-[#D9D9D9]"></div>
        </Link>
    )
}

export default FindSingle