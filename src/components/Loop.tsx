import Image from "next/image"
import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

const Loop = () =>{
    const router = useRouter()
    const ref = useRef<any>()

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        router.push(`/szukaj?s=${ref.current.value}`) 
    }

    return(
        <form onSubmit={handleSubmit} className="w-full absolute top-[390px] left-0 xl:top-0 xl:relative xl:w-fit">
            <input ref={ref} required placeholder="szukaj na stronie..." className="focus:border-none focus:outline-none placeholder:text-white w-full text-white text-base absolute pl-extrabig opacity-90 rounded-xl bg-transparent p-1 xl:placeholder:text-gray-950 xl:bg-white xl:relative xl:block xl:text-black" type="text"/>
            <button type="submit" className="border-none bg-none outline-none absolute mt-1 xl:mt-0 xl:left-1 xl:top-1/2 xl:-translate-y-1/2">
                <Image className=" hidden xl:block" src="/loop.png" alt="logo" width={20} height={20}/>
                <Image className=" xl:hidden" src="/loop-white.png" alt="logo" width={20} height={20}/>
            </button>
        </form>
    )
}

export default Loop