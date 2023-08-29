'use client'

import Image from "next/image"
import Button from "./Button"
import Nav from "./Nav"
import Hamburger from "./Hamburger"
import { useEffect, useState } from "react"
import Loop from "./Loop"
import Link from "next/link"
import { getNavList } from "@/utilis/urls"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScroll, setScroll] = useState(false)
    const pathname = usePathname()

    const setOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = () => {
        setScroll(!!window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(()=>{
        setIsOpen(false)
    }, [pathname])

    return (
        <div className={`${isScroll ? "drop-shadow-lg" : ""} ${isOpen ? "min-h-[450px]" : "min-h-0"} z-10 bg-green w-full py-normal px-big fixed transition-all duration-300 overflow-hidden`}>
            <nav className="max-w-normal flex justify-between m-auto relative">
                <Link className="flex items-center" href={"/"}>
                    <Image src="/logo-CDCK-white.png" alt="logo" width={96} height={32} />
                </Link>
                <div className={`absolute w-full top-[70px] transition-all duration-300 xl:w-fit xl:relative xl:top-0`}>
                    <ul className={`m-0 xl:flex xl:gap-4 xl:items-center`}>
                        {getNavList().map((nav, id) => <Nav key={id} {...nav} />)}
                    </ul>
                    <div className="h-[0.5px] bg-white w-100 opacity-50 mt-4 xl:hidden"></div>
                </div>
                <div className="flex justify-center items-center gap-[15px]">
                    <Loop />
                    <Link rel="noopener noreferrer" target="_blank" href="https://forms.gle/SgNYSAgmgFTwLgTh7">
                        <Button text="DZIAŁAJ Z NAMI" />
                    </Link>
                    <Hamburger isOpen={isOpen} setOpen={setOpen} />
                </div>
            </nav>
        </div>
    )

}

export default Navbar