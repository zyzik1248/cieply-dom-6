'use client'

import FindSingle from "@/components/FindSingle";
import { SearchPage } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


interface IQuery {
    query: string
}

async function getData(query: IQuery) {
    const response = await fetch("/api/pages/search", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
    });

    const json = await response.json();
    return json
}

const Search = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const query = searchParams.get("s") || ""
    const [data, setData] = useState<SearchPage[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getData({ query })
            setData(data)
        }

        if (!query) {
            router.push("/");
        }

        if (!data.length) {
            fetchData();
        }
    }, [query])

    return (
        <div className="max-w-normal m-auto my-[100px] px-big">
            {query &&
                <>
                    <h2 className='text-xl font-extrabold mb-[50px] sm:mb-[100px] sm:text-2xl'>Wynik wyszukiwania dla "{query}"</h2>
                    <div className="flex flex-col gap-10">
                        {data.map(page=><FindSingle key={page.slug} {...page}/>)}
                    </div>
                </>

            }
        </div>
    )
}

export default Search