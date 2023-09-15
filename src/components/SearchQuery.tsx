'use client'

// import FindSingle from "@/components/FindSingle";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";
const FindSingle = React.lazy(()=>import("@/components/FindSingle"))


interface Props {
    urls: string[]
}

const Search:React.FC<Props> = ({urls}) => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const query = searchParams.get("s") || ""

    useEffect(() => {
        if (!query) {
            router.push("/");
        }
    }, [query])


    return (
        <>
            {query &&
                <>
                    <h2 className='text-xl font-extrabold mb-[50px] sm:mb-[100px] sm:text-2xl'>Wynik wyszukiwania dla "{query}"</h2>
                    <div className="flex flex-col gap-10">
                        {urls.map(url => (
                            <Suspense fallback={<></>}>
                                <FindSingle key={url} url={url} query={query}/>
                            </Suspense>
                        ))}
                    </div>
                </>

            }
        </>
    )
}

export default Search