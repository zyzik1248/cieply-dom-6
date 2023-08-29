import PageLayout from "@/components/PageLayout"
import Image from "next/image"

const About = () => {
    return (
        <PageLayout bg="o-programie" title='‟Ciepły dom - Ciepły kościół„'>
            <div className="flex flex-col sm:flex-row-reverse sm:items-center">
                <div className="flex-1">
                    <h3 className="font-extrabold text-xl sm:text-2xl mb-6">O Programie</h3>
                    <p className="text-base sm:text-lg">
                    Jako społeczeństwo stajemy obecnie przed ogromnymi wyzwaniami dotyczącymi zaopatrywania się w energię w codziennym życiu. Wojna w Ukrainie, kryzys energetyczny i próby zatrzymania coraz wyraźniejszych zmian klimatu powodują gwałtowne drożenie paliw – węgla, gazu, ropy, a nawet drewna – które do tej pory były podstawą ogrzewania wielu naszych domów i źródłem energii elektrycznej.
                    <br></br><br></br>Dla wielu z nas, dla wielu naszych sąsiadów i bliskich ogrzewanie domu i opłacenie rachunków to coraz większy problem. Osoby z naszego otoczenia, zwłaszcza samotne kobiety są szczególnie narażone na ubóstwo energetyczne. 
                    <br></br><br></br>Dlatego zapraszamy do tworzenia <span className="text-green font-bold">PARAFIALNYCH ZESPOŁÓW SOLIDARNOŚCI ENERGETYCZNEJ.</span> Podpowiadamy jak oszczędzać energię oraz jak korzystać z dostępnych dotacji na remonty i termomodernizację.
                    We wspólnocie wierzących możemy razem zadbać o ciepłe domy i ciepłe kościoły!
                    </p>
                </div>
                <div className="relative m-auto mt-7 w-[250px] h-[250px] sm:flex-1 sm:w-[400px] sm:h-[400px]">
                    <Image className="h-full" alt="world enviroment" src='/world-enviroment.png' layout="fill" objectFit='contain' />
                </div>
            </div>
            <div className="max-w-[1000px] w-full m-auto">
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">Zapraszamy wszystkich, którzy chcą się włączyć w swoich lokalnych społecznościach do zdobycia:</h3>
                <ul className="ul-primary text-base sm:text-lg">
                    <li>wiedzy na temat oszczędności energii i transformacji energetycznej, a także o termomodernizacji oraz dofinansowaniach państwowych i gminnych na ten cel.</li>
                    <li>kompetencji ułatwiających działanie w swoich lokalnych społecznościach: parafiach, szkołach, gminach itd.</li>
                    <li>wsparcia finansowego i merytorycznego w realizacji lokalnych działań – zmian w infrastrukturze i wzorach zachowań – wpływających na oszczędność energii i środków finansowych, a także na ochronę środowiska i klimatu.</li>
                </ul>
            </div>
            <div className="max-w-[1000px] w-full m-auto">
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">Do kogo kierujemy program ?</h3>
                <ul className="ul-primary text-base sm:text-lg">
                    <li>parafianie, którzy chcą skorzystać z informacji, zachęty, ze wsparcia zaufanych osób,</li>
                    <li>parafianie, którzy chcą poświęcić trochę czasu dla innych,</li>
                    <li>parafianie, którzy zrobili termomodernizację np. korzystając z dofinansowania i chcą się podzielić doświadczeniem</li>
                    <li>parafianie, którzy mają doświadczenie budowlane: projektowe, w nadzorze, urzędowe czy organizacyjne</li>
                    <li>eksperci np. z branży energetycznej, czy ciepłownictwa, audytorzy, naukowcy,</li>
                    <li>księża, siostry zakonne, członkowie wspólnoty, którzy znają potrzeby parafian oraz parafii</li>
                </ul>
            </div>
            <div className="max-w-[1000px] w-full m-auto">
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">Co oferujemy ?</h3>
                <ul className="ul-primary text-base sm:text-lg">
                    <li>materiały i pomoc w organizacji spotkań w parafiach</li>
                    <li>aktualne informacje o dofinansowaniach termomodernizacyjnych</li>
                    <li>bazę wiedzy</li>
                    <li>szkolenia i wsparcie merytoryczne</li>
                    <li>wymianę doświadczeń i przykłady dobrych praktyk</li>
                    <li>promocję lokalnych inicjatyw naszymi kanałami</li>
                    <li>gwarancję aktywności zgodnej z naszą wiarą i nauczaniem Kościoła, realnie potrzebnej ludziom zagrożonym ubóstwem energetycznym oraz środowisku</li>
                    <li>błogosławieństwo prosto z Watykanu 🙂 – współpracujemy z Dykasterią ds. Integralnego Rozwoju Człowieka</li>
                </ul>
            </div>
            <div className="max-w-[1000px] w-full m-auto">
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">Co chcemy osiągnąć ?</h3>
                <ul className="ul-primary text-base sm:text-lg">
                    <li>łączyć ludzi i zasoby już obecne i dostępne w środowisku lokalnym, ale  nie wykorzystywane,</li>
                    <li>przekazywać aktualne informacje i wiedzę dotyczącą tematu,</li>
                    <li>wprowadzać zmiany na lepsze z zyskiem dla poszczególnych rodzin i wspólnoty parafialnej,</li>
                    <li>informować o dobrych realizacjach, działaniach i dobrych praktykach,</li>
                    <li>zachęcać, wspierać i cieszyć się sukcesami - dawać nadzieję że „można” 🙂</li>
                    <li>ożywić przekonanie że Kościół jest wspólnotą, praktykującą miłość wzajemną w konkrecie życia.</li>
                </ul>
            </div>
            <div className="max-w-[1000px] w-full m-auto">
                <h3 className="font-extrabold text-xl sm:text-2xl mb-6">Działaniom lokalnym towarzyszyć będą:</h3>
                <ul className="ul-primary text-base sm:text-lg">
                    <li>kampania informacyjna nt. dostępu do wsparcia finansowego, ułatwiającego gospodarstwom domowym przeprowadzenie częściowej lub kompleksowej termomodernizacji,</li>
                    <li>działania społeczne wspierające osoby zagrożone skutkami ubóstwa energetycznego</li>
                    <li>działania sieciujące mające na celu wzmocnienie współpracy między wspólnotą wiernych, instytucjami gminnymi oraz organizacjami pozarządowymi.</li>
                </ul>
            </div>
        </PageLayout>
    )
}

export default About