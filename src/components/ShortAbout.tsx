import Link from "next/link"
import Button from "./Button"
import Image from "next/image"
import { urls } from "@/utilis/urls"

const ShortAbout = () =>{
    return(
        <div className="px-big flex flex-col gap-[40px] sm:flex-row items-center">
            <div className="flex-1">
                <h3 className="font-extrabold mb-6 text-xl sm:text-2xl">O Programie</h3>
                <p className="mb-6 text-base sm:text-lg">Program „Ciepły Dom - Ciepły Kościół” powstał, by promować solidarne wspólnoty parafialne, w których razem zadbamy o ciepło w naszych domach i parafiach, oraz wesprzemy tych, którym grozi ubóstwo energetyczne.</p>
                <Link href={urls.nav.aboutProgram.url}>
                    <Button text="DOWIEDŹ SIĘ WIĘCEJ"/>
                </Link>
            </div>
            <div className="flex-1">
                <div className="relative m-auto w-[170px] h-[170px] sm:w-[280px] sm:h-[280px]">
                    <Image alt="elipse" src='/ellipse.png' layout="fill" objectFit='contain'/>
                </div>
            </div>
        </div>
    )
}

export default ShortAbout