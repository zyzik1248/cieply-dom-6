interface Props {
    children: React.ReactNode
    title: string
    bg: string
}

const PageLayout:React.FC<Props> = ({children, bg, title}) =>{

    const bgVariants = {
        'o-programie': 'bg-o-programie',
        'materialy': 'bg-materialy',
        'o-nas': 'bg-o-nas',
        'dla-parafii': 'bg-dla-parafii',
        "dla-parafian" : "bg-dla-parafian",
        "audyt-i-dotacje" : "bg-audyt-i-dotacje"
    }

    return(
        <div>
            <div>
                <div className={`${(bgVariants as any)[bg]} pb-[59%] bg-cover sm:pb-[40%]`}></div>
                <div className={`bg-orange text-xl text-center font-extrabold py-[12px]`}>
                    {title}
                </div>
            </div>
            <div className="px-big flex flex-col gap-[50px] mt-[50px] sm:mt-[25px] sm:gap-[100px]">
                {children}
            </div>
        </div>
    )
}

export default PageLayout