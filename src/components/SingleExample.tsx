import React from "react"

interface Props {
    fullTitle: string
    content: string
    title: string
    text: string
}

const ExmapleButton: React.FC<Props> = ({ fullTitle, content, title, text }) => {
    return (
        <div id={`przyklad-${title}-${text}`} className="pt-[80px] -mt-[80px] news-wrapper">
            <h3 className="font-extrabold text-xl sm:text-2xl mb-6">{fullTitle}</h3>
            <div className="text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: content}}></div>
        </div>
    )
}

export default ExmapleButton