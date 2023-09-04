import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import Link from "next/link"

const About = () => {
    return (
        <PageLayout bg="poradnik" title="Poradnik">
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl mb-4 text-green">PRAKTYCZNY PORADNIK DLA PARAFII</h3>
                <h2 className="font-extrabold text-lg sm:text-xl mb-4">CZYLI DLA WSZYSTKICH ODPOWIEDZIALNYCH I ZAANGAŻOWANYCH W TO, BY NASZE KOŚCIOŁY I BUDYNKI PARAFIALNE BYŁY CIEPŁE, A ICH UTRZYMANIE MNIEJ KOSZTOWNE.</h2>
                <p className="font-bold text-base sm:text-lg mb-4">Oszczędzanie energii cieplnej</p>
                <p className="text-base sm:text-lg">W kościołach i wszystkich budynkach parafialnych warto zacząć o rzeczy najprostszych i nie wymagających dużych nakładów:</p>
                <ul className="ul-primary text-base sm:text-lg mt-2 mb-8">
                    <li>W drzwiach zamontuj samozamykacze, załóż kotary.</li>
                    <li>Uszczelnij okna i drzwi. Ręką wyczujesz, gdzie wieje. Wyreguluj okna, załóż nowe uszczelki. Może przydać się „fachowiec”, który zna się na regulacji okien.</li>
                    <li>W pomieszczeniach ogrzewanych obniż temperaturę w nocy i w porach, w których nie używasz tych pomieszczeń. Korzystna dla zdrowia temperatura to 19-20 st.. Każdy 1 st.C mniej to oszczędność 5-6 % energii.</li>
                    <li>Pilnuj, by w pomieszczeniach nie zostawiać uchylonych lub nie domkniętych okien. Wietrz krótko, ale intensywnie, zawsze przy zakręconych grzejnikach. Szeroko otwieraj okna na 2-3 minuty, by pomieszczenie nie zdążyło się wychłodzić.</li>
                    <li>Pamiętaj by odpowietrzyć kaloryfery przed sezonem grzewczym.</li>
                    <li>Zamontuj ekrany  zagrzejnikowe. Ekran odbija nawet do 90% ciepła generowanego przez tylną część grzejnika.</li>
                </ul>
                <p className="text-base sm:text-lg">Największą oszczędność na długie lata przyniesie zrobienie kompleksowej <span className="font-bold text-green">TERMOMODERNIZACJI</span> budynków parafialnych , a także choćby częściowa samego kościoła.</p>
                <p className="text-base sm:text-lg mb-2">Termomodernizacja polega na poprawie wentylacji, ociepleniu ścian, stropów, podłóg oraz wymianie zużytej stolarki (w oknach witrażowych stosuje się specjalne zabezpieczenie termiczne), a także usprawnieniu systemu ogrzewania (wymiana systemu ogrzewania na bardziej efektywny i ekologiczny).</p>
                <p className="text-base sm:text-lg mb-2">Dzięki termomodernizacji można zużywać kilkadziesiąt procent mniej energii na ogrzewanie.</p>
                <p className="text-base sm:text-lg mb-2">Zawsze warto zacząć od AUDYTU ENERGETYCZNEGO, który proponuje rozwiązania techniczne, zakresy i etapy prac oraz źródła dofinansowań.</p>
                <p className="text-base sm:text-lg mb-4">Na termomodernizację budynków przeznaczane są coraz większe środki państwowe, gdyż działanie to jest jednym z priorytetów w Polsce. Srodkami dysponuje przede wszystkim Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej oraz Wojewódzkie Fundusze Ochrony Środowiska i Gospodarki Wodnej.</p>
                <p className="text-base sm:text-lg">Oszczędzanie energii elektrycznej i wody</p>
                <ol className="ol-primary text-base sm:text-lg mt-2 mb-8">
                    <li>Wymień całe oświetlenie na energooszczędne żarówki LED. Mają nawet kilkadziesiąt razy dłuższą żywotność niż stare żarówki, a wymiana jednej starej żarówki na ledową to oszczędność kosztów energii ok. 120 zł rocznie.</li>
                    <li>Zamontuj czujnik zmierzchowy przy oświetleniu zewnętrznym, a w korytarzach i przedpokojach czujniki ruchu.</li>
                    <li>Wyłączaj urządzenia elektryczne, gdy ich nie używasz i nie zostawiaj urządzeń w trybie czuwania. Każda zapalona dioda to strata energii  - stosuj listwy z opcją wyłączania.</li>
                </ol>
                <p className="text-base sm:text-lg">Ładowarki wyjmuj z gniazdek.</p>
                <ol className="ol-primary ol-start-4 text-base sm:text-lg mt-2 mb-8">
                    <li>Komputer wyłącz, gdy przerywasz pracę na dłużej niż 15 min. Zrezygnuj z wygaszacza. Jeśli możesz wymień ekran na mniejszy.  Używaj raczej laptopa niż komputera stacjonarnego, który średnio zużywa 4 razy więcej energii.</li>
                    <li>Drukarkę włączaj dopiero przed jej użytkowaniem i wyłączaj po użyciu.</li>
                    <li>Używaj mniejszej mocy odkurzacza. Regularnie opróżniaj go, bo gdy jest całkowicie zapełniony, zużycie energii rośnie o ok. 50%!</li>
                    <li>Zamontuj perlatory na kranach z wodą użytkową.</li>
                    <li>	Gromadź wodę deszczową do podlewania ogrodu. Istnieją korzystne dotacje na zamontowanie zbiorników lub systemów rozprowadzania deszczówki.</li>
                </ol>
                <p className="text-base sm:text-lg mb-4">Potrzebujesz wsparcia i pomocy w sprawie termomodernizacji budynków parafialnych skontaktuj się z nami <Link className="font-bold text-green underline" href="@mailto:cieplydom@laudatosimovement.org">cieplydom@laudatosimovement.org</Link></p>
                <Link className="font-bold text-green underline" target="_blank" href="/poradnik-dla-parafii.pdf">PORADNIK DLA PARAFII</Link>
            </div>
            <div>
                <h3 className="font-extrabold text-xl sm:text-2xl mb-4 text-green">PRAKTYCZNY PORADNIK DLA PARAFIAN</h3>
                <h2 className="font-extrabold text-lg sm:text-xl mb-4">JAK OSZCZĘDZAĆ ENERGIĘ, DBAĆ O ŚRODOWISKO I MIEĆ WIĘCEJ ŚRODKÓW NA DOBRE CELE.</h2>
                <p className="font-bold text-base sm:text-lg mb-4"> Zatrzymaj ciepło w domu!</p>
                <p className="text-base sm:text-lg">Sprawdź okna i drzwi, czy są szczelne. Ręką wyczujesz, gdzie wieje. Wyreguluj okna, załóż nowe uszczelki. Ociepl drzwi, załóż kotarę.  Może warto zainwestować w wymianę stolarki.</p>
                <ul className="ul-primary text-base sm:text-lg mt-2 mb-8">
                    <li>Podłogę przykryj dywanem, a okna zasłaniaj na noc grubszymi zasłonami lub roletami.</li>
                    <li>W słoneczne dni odsłaniaj okna i pozwalaj, by naturalne ciepło nagrzało pomieszczenia.</li>
                    <li>Wietrz krótko, ale często i intensywnie, zawsze przy zakręconych grzejnikach. Szeroko otwieraj okna na 2-3 minuty, by pomieszczenie nie zdążyło się wychłodzić,</li>
                    <li>Pamiętaj by odpowietrzyć kaloryfery przed sezonem grzewczym.</li>
                    <li>Odsuń meble od grzejnika, niczym go nie zakrywaj, nie wieszaj na nim prania, by ciepło mogło krążyć swobodnie. Regularnie wycieraj kurz z grzejników.</li>
                    <li>Zamontuj ekran zagrzejnikowy. Ekran odbija nawet do 90% ciepła generowanego przez tylną część grzejnika.</li>
                    <li>W pokoju dziennym utrzymuj korzystną dla zdrowia temperaturę 19-20 st. W sypialni i kuchni obniż ją do 16-18 st. Wychodząc do pracy, ustaw temperaturę na 16 stopni. Każdy 1 st.C mniej to oszczędność 5-6 % energii. Gdy odczuwasz chłód załóż cieplejsze ubrania.</li>
                </ul>
                <p className="text-base sm:text-lg">Te proste działania nie wymagają większych inwestycji, ale mogą znacząco obniżyć rachunki.</p>
                <p className="text-base sm:text-lg mb-2">Jednak największą oszczędność na długie lata przyniesie zrobienie kompleksowej <span className="font-bold text-green">TERMOMODERNIZACJI</span> domu lub mieszkania.</p>
                <p className="text-base sm:text-lg mb-2">Termomodernizacja polega na poprawie wentylacji, ociepleniu ścian, stropów, podłóg oraz wymianie zużytej stolarki, a także usprawnieniu systemu ogrzewania (wymiana pieca na efektywny i ekologiczny).</p>
                <p className="text-base sm:text-lg mb-2">Dzięki temu można zużywać kilkadziesiąt procent mniej energii na ogrzewanie.</p>
                <p className="text-base sm:text-lg mb-2">Zawsze warto zacząć od <span className="font-bold text-green">AUDYTU ENERGETYCZNEGO,</span> który proponuje rozwiązania techniczne, zakresy i etapy prac oraz źródła dofinansowań.</p>
                <p className="text-base sm:text-lg mb-8">Na termomodernizacje budynków przeznaczone są bardzo duże środki państwowe, które dofinansowują remonty prywatnych domów nawet do kwoty 135 tys. zł.</p>
                <p className="text-base sm:text-lg mb-2">Zatrzymaj energię elektryczną!</p>
                <p className="text-base sm:text-lg mb-8">Jeśli kupujesz nowy sprzęt zawsze wybieraj ten o wysokiej klasie energetycznej A++ ! Kupując energooszczędną pralkę czy lodówkę zaoszczędzisz rocznie ok. 300 zł.</p>
                <p className="text-base sm:text-lg text-green font-bold">OŚWIETLENIE</p>
                <ul className="ul-primary text-base sm:text-lg mt-2 mb-8">
                    <li>Jak najwięcej korzystaj ze światła dziennego – jest najzdrowsze i darmowe</li>
                    <li>Pamiętaj o wyłączaniu oświetlenia, gdy wychodzisz z pomieszczenia czy z mieszkania.</li>
                    <li>Używaj oświetlenia punktowego, tam gdzie faktycznie go potrzebujesz.</li>
                    <li> Stosuj wyłącznie energooszczędne żarówki LED. Mają nawet kilkadziesiąt razy dłuższą żywotność niż stare żarówki, a wymiana jednej starej żarówki na ledową to oszczędność kosztów energii ok. 120 zł rocznie.</li>
                </ul>
                <p className="text-base sm:text-lg text-green font-bold">SPRZĘTY RTV</p>
                <ul className="ul-primary text-base sm:text-lg mt-2 mb-8">
                    <li>Wyłączaj nieużywany sprzęt z kontaktu i nie zostawiaj urządzeń w trybie czuwania. Każda zapalona dioda to strata energii - stosuj listwy z opcją wyłączania.</li>
                    <li>Ładowarki wyjmuj z gniazdek.</li>
                    <li>Telewizor wyłączaj, gdy opuszczasz pomieszczenie. Najbardziej oszczędne są telewizory LED i te z mniejszym ekranem.</li>
                    <li>Komputer wyłącz, gdy przerywasz pracę na dłużej niż 15 min. Zrezygnuj z wygaszacza. Jeśli możesz wymień ekran na mniejszy. Używaj raczej laptopa niż komputera stacjonarnego, który średnio zużywa 4 razy więcej energii.</li>
                    <li>Drukarkę włączaj dopiero przed jej użytkowaniem i wyłączaj po użyciu.</li>
                </ul>
                <p className="text-base sm:text-lg text-green font-bold">SPRZĘTY AGD</p>
                <ul className="ul-primary text-base sm:text-lg mt-2 mb-8">
                    <li>Lodówkę regularnie rozmrażaj i myj. Już 5 mm lodu oznacza wzrost zużycia energii o 20%! Otwieraj ją rzadko i na krótko. Wkładaj potrawy ostudzone, a te które wyjmujesz z zamrażarki rozmrażaj w lodówce. Lodówkę stawiaj z dala od bezpośredniego słońca i  dalej od źródeł ciepła (kuchenka, pralka, grzejnik).</li>
                    <li>Lodówki nowego typu (samorozmrażające się) utrzymuj w czystości; ustaw temperaturę w opcji eko (najlepsza temp. to 4-6 st)</li>
                    <li>Pralkę napełniaj w całości, pierz najczęściej w 30 maks. 40 st.. Używaj skróconych programów do oczyszczania mniej zabrudzonych ubrań.</li>
                    <li>Używaj mniejszej mocy odkurzacza. Regularnie opróżniaj go, bo gdy jest całkowicie zapełniony, zużycie energii rośnie o ok. 50%!</li>
                    <li>Prasuj tylko, gdy jest to konieczne, najlepiej większą ilość ubrań od razu, by nie rozgrzewać żelazka wielokrotnie</li>
                    <li> W czajniku gotuj dokładnie tyle wody, ile zużyjesz od razu</li>
                    <li>Potrawy gotuj pod szczelną przykrywką, nie przekraczaj temperatury 100 st., nie sól wody przed zagotowaniem. Zainwestuj w szybkowar.</li>
                    <li> Dopasowuj wielkość garnków do palnika. Utrzymuj dna garnków w czystości.</li>
                    <li>W piekarniku używaj funkcji termoobiegu,  nie otwieraj go w czasie pracy i wyłączaj 5-10  min przed końcem pieczenia – temperatura w nim utrzyma się i dopiecze potrawy.</li>
                    <li> Mniejsze ilości potraw podgrzewaj w mikrofalówce. Utrzymuj ją w czystości.</li>
                </ul>
                <Link className="font-bold text-green underline" target="_blank" href="/poradnik-dla-parafian.pdf">PORADNIK DLA PARAFIAN</Link>
            </div>
        </PageLayout>
    )
}

export default About