import Link from "next/link"
import React from "react"
import Button from "./Button"

interface Props {
    title: string
    text: string
}

const ExmapleButton: React.FC<Props> = ({ title, text }) => {
    return (
        <div className={`relative shadow-md rounded-[5px] px-big py-[35px] border-2 w-[200px]`} >
            <p className="text-center text-base sm:text-lg font-bold mb-2">{title}</p>
            <p className="text-center text-sm sm:text-base mb-8">{text}</p>
            <Link className="absolute bottom-[30px] block text-center text-sm sm:text-base text-green underline font-bold" href={`#przyklad-${title}-${text}`}>Sprawdź</Link>
        </div>
    )
}

export default ExmapleButton