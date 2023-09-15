'use client'

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import FindSingle from "./FindSingle";

interface Props{
    urls: string[]
}

const SearchQuery:React.FC<Props> = async ({urls}) => {
    const searchParams = useSearchParams();
    const query = searchParams.get("s") || ""

    console.log(urls)

    return (
        <>
            {/* {query &&
                // <>
                //     <h2 className='text-xl font-extrabold mb-[50px] sm:mb-[100px] sm:text-2xl'>Wynik wyszukiwania dla "{query}"</h2>
                //     <div className="flex flex-col gap-10">
                //         {urls.map(url=><FindSingle key={url} url={url} query={query}/>)}
                //     </div>
                // </>

            } */}
        </>
    )
}

export default SearchQuery