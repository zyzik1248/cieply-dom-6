import PageLayout from "@/components/PageLayout"
import { urls } from "@/utilis/urls"
import Link from "next/link"

const ForParishioners = () =>{
    return(
        <PageLayout bg="dla-parafian" title="Dla Parafian">
            <div>
                <p className="font-bold text-base sm:text-lg m-0">„[…] choć istniejący porządek świata nie jest w stanie wziąć na siebie odpowiedzialności, to <span className="text-green">organizacja lokalna może coś zmienić.</span> Tam bowiem może zrodzić się większa odpowiedzialność, silne poczucie wspólnoty, szczególna zdolność do troski i bardziej wielkoduszna kreatywność, głęboka miłość do swej ziemi. Tam myśli się również o tym, co zostanie przekazane dzieciom i wnukom.„ <span className="text-sm sm:text-base"> (Papież Franciszek, encyklika Laudato si’, 179)</span></p>
                <p className="text-base sm:text-lg m-0 mt-8">
                    Ogrzewanie domu i opłacenie rachunków to coraz większe wyzwanie dla wielu z nas, dla wielu naszych sąsiadów i bliskich. We wspólnocie wierzących możemy razem zadbać o ciepłe domy i ciepłe kościoły. Jako chrześcijanie nie jesteśmy obojętni na problemy w naszym otoczeniu. To właśnie wiara i wspólnota Kościoła daje nam siły, by szukać rozwiązań i nieść pomoc.
                    <br></br><br></br>
                    Zachęcamy wierzących do zmiany nawyków, by odpowiedzialne korzystać z zasobów i ograniczać w jak największym stopniu ich zużycie. Wystarczy podjąć proste działania, by zadbać o siebie i swoich bliskich, a także zatroszczyć się o środowisko i zmniejszyć koszty ogrzewania.
                    <br></br><br></br>
                    Aktywnych parafian Zapraszamy do tworzenia <span className="font-bold text-green">PARAFIALNYCH ZESPOŁÓW SOLIDARNOŚCI ENERGETYCZNEJ.</span> czyli grup zaangażowanych parafian, którzy mogą służyć radą zarówno duszpasterzom odpowiedzialnym za parafię, jak i innym parafianom. W każdej parafii są osoby, które mają doświadczenie techniczne, budowlane, organizacyjne czy pomocowe i chcą się nim dzielić!
                </p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl">
                    Podpowiadamy poniżej, jak to można podjąć aktywność w parafii:
                </h3>
                <ul className="ul-primary text-base sm:text-lg mt-8">
                    <li>Spotkać się wstępnie z proboszczem i radą parafialną (jeśli jest), by przedstawić idee,  ustalić spotkanie w parafii i je ogłosić (możemy udostępnić plakat, ulotki, list do proboszcza lub zasugerować treść ogłoszenia)</li>
                    <li> Przeprowadzić spotkanie {'>'} rozpoznać zainteresowanie i potrzeby {">"} ustalić zadania (możemy udostępnić prezentację, omówić potrzeby i ewentualny przebieg spotkania)</li>
                    <li>Nawiązać kontakt z punktem konsultacyjnym w gminie lub z doradcą energetycznym (można zebrać grupę i poprosić pracownika gminy o szkolenie n.t. dotacji)</li>
                    <li>Nawiązać kontakt z fachowcami (budowlańcy, projektanci), ekspertami (audytorzy) (można zorganizować spotkanie o termomodernizacji w praktyce)</li>
                    <li>
                        <p>Wspierać i towarzyszyć osobom mniej zaradnym</p>
                        <ul className="ul-secondary mt-3 text-base sm:text-lg">
                            <li>można pójść z panią/panem do „okienka w gminie”</li>
                            <li>pomóc zaplanować inwestycję</li>
                            <li>pomóc wypełnić wniosek i doradzić w kwestiach umów</li>
                            <li>pomóc w koordynacji remontu</li>
                            <li>pomoc w wykonaniu remontu</li>
                            <li>pomoc w rozliczeniu i poprawnym zamknięciu procedur</li>
                            <li>inne</li>
                        </ul>
                    </li>
                    <li>Dzielić się w zakresie metod oszczędzania metodami Zrób-To-Sam (można zorganizować spotkanie z fachowcem o metodach oszczędzania bez dużych nakładów inwestycyjnych lub wydrukować nasz poradnik - <Link className="text-green underline font-bold" href={urls.nav.download.url}>w zakładce DO POBRANIA</Link>)</li>
                    <li>Zorganizować w parafii sieć wsparcia materialnego dla osób doświadczających ubóstwa energetycznego (może warto zorganizować jakąś inicjatywę przy parafii np. podzielnik)</li>
                </ul>
                <p className="m-0 mt-8 text-base sm:text-lg">Jest mnóstwo możliwości i scenariuszy. Zachęcamy do działania. Łączmy siły i działajmy razem ! Zapraszamy do kontaktu z nami! <Link className="text-green underline font-bold" href="mailto:cieplydom@laudatosimovement.org">cieplydom@laudatosimovement.org</Link></p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">MATERIAŁY DO POBRANIA</h3>
                <Link className="text-green underline font-bold mb-2 block" href={urls.links.guideParishioners.url}>{urls.links.guideParishioners.name}</Link>
                <Link className="text-green underline font-bold mb-2 block" href={urls.links.audyt.url}>{urls.links.audyt.name}</Link>
                <Link className="text-green underline font-bold mb-2 block" href={urls.links.examples.url}>{urls.links.examples.name}</Link>
            </div>
        </PageLayout>
    )
}

export default ForParishioners