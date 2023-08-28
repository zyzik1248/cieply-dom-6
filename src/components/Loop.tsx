import Image from "next/image"

const Loop = () =>{
    return(
        <div className="w-[20px] absolute top-[355px] left-0 md:top-0 md:relative md:w-fit">
            <input placeholder="szukaj na stronie..." className="placeholder:text-white text-base absolute pl-extrabig opacity-90 rounded-xl w-[200px] bg-transparent p-1 md:placeholder:text-gray-950 md:bg-white md:relative md:block" type="text"/>
            <Image className="absolute hidden md:block md:left-1 md:top-1/2 md:-translate-y-1/2" src="/loop.png" alt="logo" width={20} height={20}/>
            <Image className="absolute mt-1 md:hidden md:left-1 md:top-1/2 md:-translate-y-1/2" src="/loop-white.png" alt="logo" width={20} height={20}/>
        </div>
    )
}

export default Loop