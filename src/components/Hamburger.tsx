import { MouseEventHandler } from "react"

interface Props {
    isOpen?: boolean
    setOpen?: MouseEventHandler<HTMLDivElement>
}

const Hamburger: React.FC<Props> = ({isOpen, setOpen}) =>{
    return(
        <div className={`${isOpen ? "block" : "flex"} flex-col gap-[6px] cursor-pointer md:hidden`} onClick={setOpen}>
            <div className={`${isOpen ? "-rotate-45 translate-y-[75%]" : ""} rounded-[5px] w-[20px] h-[2px] bg-white transition-all duration-300`}></div>
            <div className={`${isOpen ? "scale-0" : ""} w-[20px] h-[2px] rounded-[5px] bg-white transition-all duration-300`}></div>
            <div className={`${isOpen ? "rotate-45 translate-y-[-75%]" : ""} rounded-[5px] w-[20px] h-[2px] bg-white transition-all duration-300`}></div>
        </div>
    )
}

export default Hamburger