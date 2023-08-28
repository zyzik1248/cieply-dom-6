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
        <div className={`relative ${(bgVariants as any)[url]} bg-cover pb-[60%] sm:pb-[33%]`}>
        </div>
    )
}

export default ItemCarousel