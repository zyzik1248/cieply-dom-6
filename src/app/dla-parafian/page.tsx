import PageLayout from "@/components/PageLayout"
import Link from "next/link"

const ForParishioners = () =>{
    return(
        <PageLayout bg="dla-parafian" title="Dla Parafian">
            <div>
                <p className="font-bold text-base sm:text-lg m-0">„[…] choć istniejący porządek świata nie jest w stanie wziąć na siebie odpowiedzialności, to organizacja lokalna może coś zmienić. Tam bowiem może zrodzić się większa odpowiedzialność, silne poczucie wspólnoty, szczególna zdolność do troski i bardziej wielkoduszna kreatywność, głęboka miłość do swej ziemi. Tam myśli się również o tym, co zostanie przekazane dzieciom i wnukom.„<br></br><span className="text-sm sm:text-base">(Papież Franciszek, encyklika Laudato si’, 179)</span></p>
                <p className="text-base sm:text-lg m-0 mt-8">Najbardziej zanieczyszczone miasta w Europie znajdują się na terenie Polski. W gronie 20 miast, które w rankingu wypadły najgorzej, aż 12 znajduje się w Polsce. Większość budynków w Polsce to tzw. wampiry energetyczne, które wciąż trzeba ogrzewać, a i tak nie jest wystarczająco ciepło i sucho. Ciepło ucieka przez ściany, podłogi, nieocieplony dach, okna, drzwi zewnętrzne i wentylację. Źle ogrzewane i zabezpieczone budynki szybko niszczeją i tracą na wartości. <span className="font-bold text-green">Jeśli chcemy żeby dobrze służyły naszym dzieciom i wnukom przez lata warto w nie mądrze zainwestować korzystając z dostępnych programów pomocowych.</span> Drogą wyjścia z kryzysu jest droga do przodu: w kierunku efektywności energetycznej i neutralności klimatycznej. </p>
                <p className="text-base sm:text-lg m-0 mt-8">Ogrzewanie domu i opłacenie rachunków to coraz większe wyzwanie dla wielu z nas, dla wielu naszych sąsiadów i bliskich. We wspólnocie wierzących możemy razem zadbać o ciepłe domy i ciepłe kościoły. Jako chrześcijanie nie jesteśmy obojętni na problemy w naszym otoczeniu. To właśnie wiara i wspólnota Kościoła daje nam siły, by szukać rozwiązań i nieść pomoc.</p>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl">Zapraszamy do tworzenia <span className="text-green font-bold">PARAFIALNYCH ZESPOŁÓW SOLIDARNOŚCI ENERGETYCZNEJ.</span></h3>
                <p className="text-lg font-extrabold mb-6 sm:text-xl ">Podpowiadamy jak oszczędzać energię oraz jak korzystać z dostępnych dotacji na remonty i termomodernizację.</p> 
                <p className="text-base sm:text-lg mb-6">Jak to może wyglądać konkretnie w parafii krok po kroku podpowiadamy poniżej :</p>
                <ul className="ul-primary text-base sm:text-lg">
                    <li>
                        <p className="font-bold text-base sm:text-lg">Spotkać się wstępnie proboszczem i radą parafialną, by przedstawić idee,  ustalić spotkanie w parafii i je ogłosić</p>
                        <p className="text-base sm:text-lg">możemy udostępnić plakat, ulotki, zasugerować treść ogłoszenia…</p>
                    </li>
                    <li>
                        <p className="font-bold text-base sm:text-lg">Przeprowadzić spotkanie &#62; rozpoznać zainteresowanie i potrzeby &#62; ustalić zadania</p>
                        <p className="text-base sm:text-lg">możemy udostępnić plakat, ulotki, zasugerować treść ogłoszenia…</p>
                    </li>
                    <li>
                        <p className="font-bold text-base sm:text-lg">Nawiązać kontakt z punktem konsultacyjnym w gminie (ulotki, programy, eksperci)</p>
                        <p className="text-base sm:text-lg">można zebrać grupę i poprosić o szkolenie przez pracownika gminy jak działają dotacje</p>
                    </li>
                    <li>
                        <p className="font-bold text-base sm:text-lg">Nawiązać kontakt z fachowcami (budowlańcy, projektanci), ekspertami (audytorzy)</p>
                        <p className="text-base sm:text-lg">można zorganizować spotkanie o termomodernizacji w praktyce</p>
                    </li>
                    <li>
                        <p className="font-bold text-base sm:text-lg">Wspierać i towarzyszyć osobom mniej zaradnym</p>
                        <ul className="ul-secondary text-base sm:text-lg mt-4">
                            <li>można pójść z panią/panem do „okienka w gminie”</li>
                            <li>pomóc zaplanować inwestycję</li>
                            <li>pomóc wypełnić wniosek i doradzić w kwestiach umów</li>
                            <li>pomóc w koordynacji remontu</li>
                            <li>pomoc w wykonaniu remontu (jeśli firma budowlana)</li>
                            <li>pomoc w rozliczeniu i poprawnym zamknięciu procedur</li>
                            <li>inne</li>
                        </ul>
                    </li>
                    <li>
                        <p className="font-bold text-base sm:text-lg">Dzielić się w zakresie metod oszczędzania metodami Zrób-To-Sam</p>
                        <p className="text-base sm:text-lg">można zorganizować spotkanie z fachowcem o metodach oszczędzania bez dużych nakładów inwestycyjnych</p>
                    </li>
                    <li>
                        <p className="font-bold text-base sm:text-lg">Zorganizować w parafii sieć wsparcia materialnego dla osób doświadczających ubóstwa energetycznego</p>
                        <p className="text-base sm:text-lg">może warto zorganizować jakąś inicjatywę przy parafii</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl">Jest mnóstwo możliwości i scenariuszy. Zachęcamy do działania. </h3>
                <p className="text-lg font-extrabold mb-6 sm:text-xl ">Łączmy siły i działajmy razem ! Zapraszamy.</p> 
            </div>
        </PageLayout>
    )
}

export default ForParishioners