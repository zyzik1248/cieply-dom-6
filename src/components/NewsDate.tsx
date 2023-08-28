import { dataToStringFullMonth, dateToString } from "@/utilis/dateConverter"

interface Props {
    date: Date
}

const NewsDate:React.FC<Props> = ({date}) =>{
    return(
        <div className="flex gap-5 items-center">
            <div className="w-full fit-1 h-[1px] bg-[#F2F2F2]"></div>
            <div className="box_parent">
            <div className="min-w-[120px] bg-orange py-small [clip-path:polygon(0_0,85%_0,100%_100%,15%_100%)] sm:[clip-path:polygon(0_0,90%_0,100%_100%,10%_100%)] sm:min-w-[300px]">
                <p className=" text-base font-semibold text-center sm:text-lg sm:hidden">{dateToString(date)}</p>
                <p className="text-base hidden font-semibold text-center sm:text-lg sm:block">{dataToStringFullMonth(date)}</p>
                <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="flt_tag">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                        <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
                    </filter>
                </defs>
            </svg>
            </div>
            </div>
            <div className="w-full fit-1 h-[1px] bg-[#F2F2F2]"></div>
        </div>
    )
}

export default NewsDate