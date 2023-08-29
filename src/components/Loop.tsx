import Image from "next/image"

const Loop = () =>{
    return(
        <div className="w-[20px] absolute top-[390px] left-0 xl:top-0 xl:relative xl:w-fit">
            <input placeholder="szukaj na stronie..." className="placeholder:text-white text-base absolute pl-extrabig opacity-90 rounded-xl w-[200px] bg-transparent p-1 xl:placeholder:text-gray-950 xl:bg-white xl:relative xl:block" type="text"/>
            <Image className="absolute hidden xl:block xl:left-1 xl:top-1/2 xl:-translate-y-1/2" src="/loop.png" alt="logo" width={20} height={20}/>
            <Image className="absolute mt-1 xl:hidden xl:left-1 xl:top-1/2 xl:-translate-y-1/2" src="/loop-white.png" alt="logo" width={20} height={20}/>
        </div>
    )
}

export default Loop