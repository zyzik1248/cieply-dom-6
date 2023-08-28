import Image from "next/image"
import NewsDate from "./NewsDate"

const News = () =>{
    return(
        <div>
            <NewsDate date={new Date()}/>
            <div className="flex flex-col gap-[40px] sm:px-big sm:flex-row sm:items-center sm:mt-8">
                <div className="flex-1">
                    <h3 className="text-xl font-extrabold m-0 mb-4 mt-5 sm:text-2xl">Niedziela Św. Franciszka</h3>
                    <p className="text-base sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus ipsum, egestas nec posuere quis, malesuada quis lacus. Nulla a ipsum dapibus, rutrum lorem vitae, suscipit neque. Maecenas vel convallis risus. </p>
                </div>
                <div className="flex-1">
                    <div className="relative m-auto w-[170px] h-[170px] sm:w-[280px] sm:h-[280px]">
                        <Image alt="elipse" src='/ellipse.png' layout="fill" objectFit='contain'/>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default News