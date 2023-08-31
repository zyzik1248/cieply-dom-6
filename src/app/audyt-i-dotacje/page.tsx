import PageLayout from "@/components/PageLayout"
import { urls } from "@/utilis/urls"
import Image from "next/image"
import Link from "next/link"

const Audyt = () => {
    return (
        <PageLayout bg="audyt-i-dotacje" title="Audyt i dotacje">
            <div>
                <p className="font-bold text-base sm:text-lg">Nasze budynki mogą zużywać kilkadziesiąt procent mniej energii na ogrzewanie! Warunkiem jest wykonanie termomodernizacji - najlepiej na podstawie Audytu Energetycznego.</p>
                <p className="text-base sm:text-lg">
                    <br></br>Wszystkich, którzy borykają się z problemem wysokich kosztów ogrzewania i niedocieplonych budynków zachęcamy do zaplanowania odpowiednich działań.
                    <br></br><br></br>
                    Remont budynku czy mieszkania to zawsze stresujące i absorbujące przedsięwzięcie. Jednak warto je przeprowadzić korzystając z fachowej pomocy i dostępnych dotacji. Koszty ogrzewania wciąż rosną, a zanieczyszczenie powietrza powoduje poważne choroby i śmierć nawet 50 tys. osób rocznie!!!
                    <br></br><br></br>
                    Dla właścicieli i współwłaścicieli domów jednorodzinnych najbardziej korzystny jest program <span className="text-green font-bold">CZYSTE POWIETRZE.</span> Wysokie dofinansowanie pozwala na wykonanie pełnej termomodernizacji. Przeczytaj z zakładce <span className="text-green font-bold">DOBRE PRZYKŁADY</span>, jak udało się to jednej z rodzin. Osoby o najniższych dochodach mogą otrzymać z programu nawet 100% dotacji (do 135 tys. zł) na wymianę starego pieca i ocieplenie domu.
                </p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl mb-6 sm:text-2xl">gdzie szukać informacji i pomocy?</h3>
                <p className="text-base sm:text-lg mb-6">Najpierw warto skontaktować się z doradcą energetycznym lub punktem konsultacyjnym w swojej gminie. Lokalni specjaliści bardzo chętnie udzielają bezcennych rad i mówią ludzkim głosem 🙂 Sami to sprawdziliśmy! </p>
                <p className="text-base font-bold  mb-6 sm:text-lg">
                    Radzimy, by zacząć od <span className="text-green">AUDYTU ENERGETYCZNEGO</span>
                </p>
                <p className="text-base sm:text-lg">
                    Audytor analizuje nieruchomość wykazując, w których miejscach ucieka ciepło z budynku i jak temu zapobiec. Analizuje też wentylację oraz instalacje grzewcze i sprawność systemu ogrzewania. Proponuje rozwiązania techniczne, zakresy i etapy prac oraz źródła dofinansowań.  Koszt audytu może być pokryty z dotacji, nawet w całości.
                    <br></br><br></br>
                    Efektem audytu jest dobrze zaplanowana, a potem fachowo przeprowadzona termomodernizacja.
                </p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl mb-6 sm:text-2xl">Co to jest Termomodernizacja?</h3>
                <p className="text-base sm:text-lg mb-6">
                    Termomodernizacja polega na poprawie wentylacji, ociepleniu ścian, stropów, podłóg oraz wymianie zużytej stolarki, a także usprawnieniu  systemu ogrzewania (wymianie pieca na energooszczędny i ekologiczny).
                    <br></br><br></br>
                    W ten sposób można zużywać kilkadziesiąt procent mniej energii na ogrzewanie .
                </p>
            </div>
            <div>
                <Image className="m-auto mb-8" alt="uciekające ciepło" src={"/ellipse.png"} width={350} height={350} />
                <Link className="text-green underline font-bold" href={urls.links.examples.url}>Przeczytajcie, jak zrobili to inni</Link>
            </div>
            <div>
                <h3 className="font-extrabold text-xl mb-6 sm:text-2xl">Gdzie szukać środków na remont?</h3>
                <p className="text-base sm:text-lg mb-6">
                    Dostępne są liczne dotacje: 
                </p>
                <p className="text-base font-bold sm:text-lg">krajowe</p>
                <ul className="ul-primary text-base sm:text-lg mt-4 mb-6">
                    <li>”Czyste powietrze” (dla właścicieli i współwłascicieli domówy jednorodzinnych) <Link href={"https://czystepowietrze.gov.pl/"} className="text-green underline font-bold">czystepowietrze.gov.pl</Link></li>
                    <li>“Ciepłe mieszkanie” (dla właścicieli lokali w budynkach wielorodzinnych) <Link href={"https://www.czystepowietrze.eu/program-cieple-mieszkanie"} className="text-green underline font-bold">czystepowietrze.eu/program-cieple-mieszkanie</Link></li>
                    <li>“Moje ciepło” (dla właścicieli nowyche budynkówi jednorodzinnyche) <Link href={"https://www.czystepowietrze.eu/program-moje-cieplo"} className="text-green underline font-bold">czystepowietrze.eu/program-moje-cieplo</Link></li>
                    <li>“Mój prąd” (dla osób pragnących zainstalować panele PV, pompy ciepła, magazyny energii) <Link href={"https://mojprad.gov.pl/"} className="text-green underline font-bold">mojprad.gov.pl</Link></li>
                </ul>
                <p className="text-base font-bold sm:text-lg">lokalne</p>
                <ul className="ul-primary text-base sm:text-lg mt-4">
                    <li>gminne miejskie i wiejskie {">"} np. 90% dofinansowanie do wymiany pieca (sprawdź dotacje w swoim Urzędzie Gminy / Urzędzie Miasta)</li>
                    <li>ulga termomodernizacyjna <Link href={"https://www.podatki.gov.pl/pit/ulgi-odliczenia-i-zwolnienia/ulga-termomodernizacyjna"} className="text-green underline font-bold">podatki.gov.pl/pit/ulgi-odliczenia-i-zwolnienia/ulga-termomodernizacyjna/</Link></li>
                </ul>
                <p className="text-base sm:text-lg m-0 mt-8">Napisz do nas, jeśli potrzebujesz wsparcia i pomocy w sprawie termomodernizacji budynków parafialnych <Link target="_blank" className="text-green underline font-bold" href={"mailto:cieplydom@laudatosimovement.org"}>cieplydom@laudatosimovement.org</Link></p>
            </div>
        </PageLayout>
    )
}

export default Audyt