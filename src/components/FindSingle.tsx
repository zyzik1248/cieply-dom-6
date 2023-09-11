
import { IndexAtributtes } from "@/types"
import Link from "next/link"
import React from "react"
import removeMarkdown from "markdown-to-text";

const FindSingle:React.FC<IndexAtributtes> = ({name, description, longSlug}) =>{
    const text = removeMarkdown(description)

    return(
        <Link className="max-w-[1000px]" href={`/${longSlug ? longSlug : ""}`}>
            <h3 className="text-xl font-extrabold text-green mb-4 sm:text-2xl">{name}</h3>
            <div className="truncate mb-4" >{text}</div>
            <div className="h-[1px] bg-[#D9D9D9]"></div>
        </Link>
    )
}

export default FindSingle