import React, { MouseEventHandler } from "react"

interface Props {
    text: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<Props> = ({ onClick, text, type = "button" }) => {
    return (
        <button className="bg-yellow border-[1px] border-none rounded-[5px] px-[10px] py-[8px] text-sm font-bold transition-all duration-300 hover:bg-yellow-dark sm:text-base" onClick={onClick} type={type}>{text}</button>
    )
}

export default Button