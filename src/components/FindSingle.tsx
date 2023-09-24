'use client'

import { IndexQuery } from "@/types"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { searchPage } from "@/utilis/search";

interface Props{
    url: string
    query: string
}

async function getData({url, query} : Props) {
    try { 
      const data = searchPage({url, query});
      return data   
    } catch (error){
      console.log(error)
      return {}
    }
}

const FindSingle:React.FC<Props> = ({url, query}) =>{
    const[data, setData] = useState<IndexQuery | {}>({})

    useEffect(() => {
        async function fetchData() {
            const data = await getData({url, query })
            setData(data)
        }

        fetchData();
    }, [query])

    if(Object.keys(data).length === 0){
        return <></>
    } else{
        const {description, slug, name} = data as IndexQuery

        return(
            <Link className="max-w-[1000px]" href={slug}>
                <h3 className="text-xl font-extrabold text-green mb-4 sm:text-2xl">{name}</h3>
                <div className="truncate mb-4" >{description}</div>
                <div className="h-[1px] bg-[#D9D9D9]"></div>
            </Link>
        )
    }

}

export default FindSingle