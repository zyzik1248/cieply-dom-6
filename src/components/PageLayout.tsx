interface Props {
    children: React.ReactNode
    title: string
    bg: string
}

const PageLayout:React.FC<Props> = ({children, bg, title}) =>{

    const bgVariants = {
        'o-programie': 'bg-[#178748]',
        'materialy': 'bg-[#70C26E]',
        'o-nas': 'bg-[#50BDE5]',
        'dla-parafii': 'bg-[#178748]',
        "dla-parafian" : "bg-[#70C26E]",
        "audyt-i-dotacje" : "bg-[#F49651]",
        "poradnik" : "bg-[#50BDE5]",
        "dobre-przyklady" : "bg-[#FFD646]"
    }

    return(
        <div>
            <div className="relative">
                <div className={`${(bgVariants as any)[bg]} pb-[59%] bg-cover sm:pb-[40%]`}>
                    <p className="text-xl font-extrabold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl">{title}</p>
                </div>
            </div>
            <div className="px-big flex flex-col gap-[50px] mt-[50px] sm:mt-[25px] sm:gap-[100px]">
                {children}
            </div>
        </div>
    )
}

export default PageLayout