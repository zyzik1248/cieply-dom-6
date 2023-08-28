import PageLayout from "@/components/PageLayout"
import Image from "next/image"

const About = () => {
    return (
        <PageLayout bg="o-nas" title="O nas">
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">Światowy Ruch Katolików na rzecz Środowiska</h3>
                <p className="text-base sm:text-lg mb-8">
                 Jest polskim przedstawicielstwem <span className="text-green font-bold">Laudato si’ Movement</span> (LSM; dawniej Global Catholic Climate Movement – GCCM), ruchu zrzeszającego ponad 900 różnych organizacji, stowarzyszeń, zakonów i innych inicjatyw, a także wolontariuszy z całego świata zaangażowanych na rzecz ekologii integralnej. Działamy w bliskiej współpracy z watykańską Dykasterią ds. Integralnego Rozwoju Człowieka, w duchu encykliki Laudato si’ papieża Franciszka, szerząc jej przesłanie w Kościele i zachęcając do wprowadzania w życie.
                <br></br><br></br>W Polsce funkcjonujemy od 2018 roku, od 2019 – jako fundacja. Chcielibyśmy, aby przesłanie encykliki Laudato si’, poświęconej trosce o Boże stworzenie i nasz wspólny dom wyraźnie wybrzmiało również w naszym kraju. Jak pisze papież Franciszek, potrzeba “usłyszeć wołanie Ziemi i krzyk ubogich”. Poprzez nasze działania oraz modlitwę chcemy razem z Kościołem powszechnym być odpowiedzią na to wezwanie.     
                </p>
            </div>
            <div className="flex flex-col gap-[30px]">
                <h3 className="font-extrabold text-xl sm:text-2xl">Kontakt</h3>
                <div className="flex gap-[20px]">
                    <Image alt="facebook" src={"/facebook-black.png"} width={45} height={45} />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p className="text-lg">Program "Ciepły Dom - Ciepły Kościół" realizowany jest przez :</p>
                    <p className="text-lg">FUNDACJA GCCM POLSKA - ŚWIATOWY RUCH KATOLIKÓW NA RZECZ ŚRODOWISKA</p>
                    <p className="text-base">al. Wojska Polskiego 27/11<br></br>01-515 Warszawa</p>
                    <p className="text-base">REGON: 383513270<br></br>NIP: 5252791647<br></br>KRS: 0000788993</p>
                    <p className="text-base">Nr rachunku: 15 1750 0012 0000 0000 4117 4587</p>
                </div>
            </div>
        </PageLayout>
    )
}

export default About