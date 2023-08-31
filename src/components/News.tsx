import Image from "next/image"
import NewsDate from "./NewsDate"
import { NewsQuery } from "@/types"
import Button from "./Button"
import Link from "next/link"

const News: React.FC<NewsQuery> = ({ date, title, description, imagePreview, slug }) => {
    return (
        <div>
            <NewsDate date={new Date(date)} />
            <div className="flex flex-col gap-[40px] sm:px-big sm:flex-row sm:items-center sm:mt-8">
                <div className="flex-1">
                    <h3 className="text-xl font-extrabold m-0 mb-4 mt-5 sm:text-2xl">{title}</h3>
                    <div className="text-base mb-8 sm:text-lg" dangerouslySetInnerHTML={{ __html: description.html }}>
                    </div>
                    <Link href={`/news/${slug}`}><Button text="DOWIEDŹ SIĘ WIĘCEJ"/></Link>
                </div>
                <div className="flex-1">
                    <div className="relative m-auto h-[200px] sm:h-[280px]">
                        <Image alt={title} src={imagePreview.url} layout="fill" objectFit='contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News