'use client'

import FindSingle from "@/components/FindSingle";
import { IndexQuery } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


interface IQuery {
    query: string
}

async function getData(query: IQuery) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/allpages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await response.json();
        return json
    } catch (error) {
        console.log(error)
    }
}

const Search = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const query = searchParams.get("s") || ""
    const [urls, setUrls] = useState<string[]>([]);

    useEffect(() => {
        if (!query) {
            router.push("/");
        }
    }, [query])

    useEffect(() => {
        async function fetchData() {
            const urls = await getData({ query })
            setUrls(urls)
        }

        if (!urls.length) {
            fetchData();
        }
    }, [])

    return (
        <div className="max-w-normal m-auto my-[100px] px-big">
            {query &&
                <>
                    <h2 className='text-xl font-extrabold mb-[50px] sm:mb-[100px] sm:text-2xl'>Wynik wyszukiwania dla "{query}"</h2>
                    <div className="flex flex-col gap-10">
                        {urls.map(url => <FindSingle key={url} url={url} query={query}/>)}
                    </div>
                </>

            }
        </div>
    )
}

export default Search