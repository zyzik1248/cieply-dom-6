import Link from "next/link"

interface Props {
    url: string
}

const ItemCarousel:React.FC<Props> = ({url}) =>{
    const bgVariants = {
        'dla-parafii': 'bg-[#178748]',
        'dla-parafian': 'bg-[#70C26E]',
        'poradnik': 'bg-[#50BDE5]',
        'dobre-przyklady': 'bg-[#FFD646]',
        'audyt-i-dotacje': 'bg-[#F49651]'
    }

    const textVariants = {
        'dla-parafii': 'Dla Parafii',
        'dla-parafian': 'Dla Parafian',
        'poradnik': 'Poradnik',
        'dobre-przyklady': 'Dobre przykłady',
        'audyt-i-dotacje': 'Audyt i dotacje'
    }

    return(
        <div className={`w-full relative ${(bgVariants as any)[url]} bg-cover pb-[59%] sm:pb-[50%]`}>
            <Link className="absolute top-0 left-0 bottom-0 right-0" href={url}></Link>
            <p className="text-xl font-extrabold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl">{(textVariants as any)[url]}</p>
        </div>
    )
}

export default ItemCarousel