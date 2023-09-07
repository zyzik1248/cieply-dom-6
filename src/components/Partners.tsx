import Image from "next/image"

const Partners = () =>{
    return(
        <div className="px-big">
            <h3 className="text-center font-extrabold text-xl sm:text-2xl">Partnerzy</h3>
            <p className="text-base text-center my-3 sm:text-lg">"Na problemy społeczne odpowiada się więziami wspólnotowymi" (Laudato Si'  219)</p>
            <div className="flex justify-between max-w-[500px] m-auto pt-extrabig">
                <Image alt="Gość Niedzielny logo" src="/goscniedzielny.png" width={81} height={51}/>
                <Image alt="Klub Jagielloński logo" src="/klub-jagiellonski.png" width={144} height={51}/>
            </div>
        </div>
    )
}

export default Partners