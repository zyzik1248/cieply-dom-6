import PageLayout from "@/components/PageLayout"
import { urls } from "@/utilis/urls"
import Link from "next/link"

const ForParish = () => {
    return (
        <PageLayout bg="dla-parafii" title="Dla Parafii">
            <div>
                <p className="font-bold text-base sm:text-lg m-0">"Potrzebna jest dziś nowa « wyobraźnia miłosierdzia», której przejawem będzie nie tyle i nie tylko skuteczność pomocy, ale zdolność bycia bliźnim dla cierpiącego człowieka, solidaryzowania się z nim, tak aby gest pomocy nie był odczuwany jako poniżająca jałmużna, ale jako świadectwo braterskiej wspólnoty dóbr." <span className="text-sm sm:text-base">JPII</span></p>
                <p className="text-base sm:text-lg m-0 mt-8">
                    Projekt “Ciepły Dom - Ciepły Kościół” w swojej istocie ma być działaniem wspólnototwórczym, uruchamiającym  “wyobraźnię miłosierdzia” w trosce o wspólne ciepłe przestrzenie kościoła oraz o członków naszej wspólnoty, zwłaszcza w okresie jesienno-zimowym
                    <br></br><br></br>
                    Zapraszamy do współpracy ekonomów diecezjalnych, proboszczów, przełożonych zakonnych i prokurentów, członków rad parafialnych i aktywnych członków wspólnot działających w Kościele.
                    <br></br><br></br>
                    Chcemy pogłębiać relacje między wiernymi i duchowieństwem, by z jednej strony zadbać o same budynki i wzmacniać odpowiedzialność parafian za nie, a z drugiej przeciwdziałać ubóstwu - w tym przypadku energetycznemu.
                </p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl">Nasz program Ciepły Dom Ciepły Kościół ma ułatwiać wymianę praktycznych doświadczeń w lokalnych wspólnotach.</h3>
                <ul className="ul-primary text-base sm:text-lg mt-8">
                    <li>Pokazujemy udane realizacje remontowe i źródła dofinansowania,</li>
                    <li>tłumaczymy czym jest audyt i termomodernizacja, </li>
                    <li>dzielimy się praktycznymi wskazówkami, jak oszczędzać energię</li>
                    <li>zachęcamy do zakładania Parafialnych Zespołów Solidarności Energetycznej, czyli grup zaangażowanych parafian, którzy mogą służyć radą zarówno duszpasterzom odpowiedzialnym za parafię, jak i innym parafianom. W każdej parafii są osoby, które mają doświadczenie techniczne, budowlane, organizacyjne czy pomocowe i chcą się nim dzielić!</li>
                    <li>Oferujemy też wsparcie specjalistyczne w temacie doradztwa technicznego, audytów energetycznych, termomodernizacji,  spółdzielni energetycznych,odnawialnych źródeł energii oraz gospodarczych usprawnień na rzecz oszczędności energii.</li>
                    <li>Informujemy o rozwiązaniach dostępnych na rynku (w gminach, instytucjach krajowych, organizacjach, przedsiębiorstwach).</li>
                </ul>
                <p className="text-base sm:text-lg m-0 mt-8">Jeżeli potrzebujesz indywidualnej porady dla parafii skontaktuj się z nami na adres <Link target="_blank" className="text-green underline font-bold" href={"mailto:cieplydom@laudatosimovement.org"}>cieplydom@laudatosimovement.org</Link></p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">MATERIAŁY DO POBRANIA</h3>
                <Link className="text-green underline font-bold mb-2 block" href={urls.links.guideParish.url}>{urls.links.guideParish.name}</Link>
                <Link className="text-green underline font-bold mb-2 block" href={urls.links.audyt.url}>{urls.links.audyt.name}</Link>
                <Link className="text-green underline font-bold mb-2 block" href={urls.links.examples.url}>{urls.links.examples.name}</Link>
            </div>
        </PageLayout>
    )
}

export default ForParish