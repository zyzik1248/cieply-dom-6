import Image from "next/image"

interface Props {
    id: number,
    title: string,
    text: string,
    image: string
}

const SingleWhy:React.FC<Props> = ({id, title, text, image}) =>{
    const bgVariants = [
        "bg-green-light",
        "bg-turquoise",
        "bg-orange-light",
        "bg-yellow-light"
    ]

    return(
        <div className={`rounded-[5px] p-normal flex flex-col gap-[15px] max-w-[360px] ${bgVariants[id]} sm:max-w-none sm:p-big`}>
            <div className="text-base font-bold min-h-[200px] flex gap-1">
                <h5 >{title}</h5>
            </div>
            <Image className="m-auto" src={image} alt={title} width={45} height={45}/>
            <div className="bg-white h-[1px] rounded-[5px]"></div>
            <p className="text-sm min-h-[150px] sm:text-base" dangerouslySetInnerHTML={{ __html: text}}></p>
        </div>
    )
}

export default SingleWhy