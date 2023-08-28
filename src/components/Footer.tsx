import Image from "next/image"
import { getNavList } from "../utilis/urls"
import Link from "next/link"

const Footer = () =>{
    return(
        <footer className="bg-green p-big">
            <div className="max-w-normal flex flex-col gap-[25px] justify-center m-auto sm:flex-row">
                <div className="flex flex-col flex-1 gap-[25px] ">
                    <div className="flex">
                        <Image alt="logo" src={"/logo-white.png"} width={255} height={58}/>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-white text-sm">Program "Ciepły Dom - Ciepły Kościół" realizowany jest przez :</p>
                        <p className="text-white text-base font-bold">FUNDACJA GCCM POLSKA - ŚWIATOWY RUCH KATOLIKÓW NA RZECZ ŚRODOWISKA</p>
                        <p className="text-white text-sm">al. Wojska Polskiego 27/11<br></br>01-515 Warszawa</p>
                        <p className="text-white text-sm">REGON: 383513270<br></br>NIP: 5252791647<br></br>KRS: 0000788993</p>
                        <p className="text-white text-sm">Nr rachunku: 15 1750 0012 0000 0000 4117 4587</p>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-[25px] sm:items-center">
                    <div className="social-media">
                        <p className="text-white text-base font-bold mb-4">Social media</p>
                        <div className="flex gap-[20px]">
                            <Image alt="facebook" src={"/facebook-white.png"} width={24} height={24}/>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer