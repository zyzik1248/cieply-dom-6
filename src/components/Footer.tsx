import Image from "next/image"
import Link from "next/link"

const Footer = () =>{
    return(
        <footer className="bg-green p-big" id="kontakt">
            <div className="max-w-normal m-auto">
                <Image className="mb-[25px]" alt="logo" src={"/logo-white.png"} width={255} height={58}/>
                <div className="flex flex-col gap-[25px] justify-center sm:flex-row">
                    <div className="flex flex-col flex-1 gap-[25px] ">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-white text-sm">Program "Ciepły Dom - Ciepły Kościół" realizowany jest przez :</p>
                            <p className="text-white text-base font-bold">FUNDACJA GCCM POLSKA - ŚWIATOWY RUCH KATOLIKÓW NA RZECZ ŚRODOWISKA</p>
                            <p className="text-white text-sm">al. Wojska Polskiego 27/11<br></br>01-515 Warszawa</p>
                            <p className="text-white text-sm">REGON: 383513270<br></br>NIP: 5252791647<br></br>KRS: 0000788993</p>
                            <p className="text-white text-sm">Nr rachunku: 15 1750 0012 0000 0000 4117 4587</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[25px] sm:items-center">
                        <div className="flex gap-[25px] flex-col">
                            <div className="social-media">
                                <p className="text-white text-base font-bold mb-4">Social media</p>
                                <div className="flex gap-[20px]">
                                    <Image alt="facebook" src={"/facebook-white.png"} width={24} height={24}/>
                                </div>
                            </div>
                            <div className="contact">
                                <p className="text-white text-base font-bold mb-2">Kontakt</p>
                                <Link className="text-white text-sm underline" href="mailto:cieplydom@laudatosimovement.org">cieplydom@laudatosimovement.org</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer