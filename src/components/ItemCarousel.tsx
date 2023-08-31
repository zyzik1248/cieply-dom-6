import Link from "next/link"

interface Props {
    url: string
}

const ItemCarousel:React.FC<Props> = ({url}) =>{
    const bgVariants = {
        'dla-parafii': 'bg-dla-parafii',
        'dla-parafian': 'bg-dla-parafian',
        'poradnik': 'bg-poradnik',
        'dobre-przyklady': 'bg-dobre-przyklady',
        'audyt-i-dotacje': 'bg-audyt-i-dotacje'
    }

    return(
        <div className={`w-full relative ${(bgVariants as any)[url]} bg-cover pb-[59%] sm:pb-[50%]`}>
            <Link className="absolute top-0 left-0 bottom-0 right-0" href={url}></Link>
        </div>
    )
}

export default ItemCarousel