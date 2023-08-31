import { IndexQuery } from "@/types"
import Link from "next/link"
import React from "react"

const FindSingle:React.FC<IndexQuery> = ({name, description, longSlug}) =>{
    return(
        <Link className="max-w-[1000px]" href={`/${longSlug ? longSlug : ""}`}>
            <h3 className="text-xl font-extrabold text-green mb-4 sm:text-2xl">{name}</h3>
            <p className="truncate mb-4">{description}</p>
            <div className="h-[1px] bg-[#D9D9D9]"></div>
        </Link>
    )
}

export default FindSingle