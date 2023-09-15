'use client'

import { IndexQuery } from "@/types"
import Link from "next/link"
import React, { useEffect, useState } from "react"

interface Props{
    url: string
    query: string
}

async function getData({url, query} : Props) {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url, query})
        });

        const json: IndexQuery = await response.json();
        return json
    } catch(error){
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