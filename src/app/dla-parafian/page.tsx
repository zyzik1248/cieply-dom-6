import PageLayout from "@/components/PageLayout"
import { urls } from "@/utilis/urls"
import Link from "next/link"

const ForParishioners = () =>{
    return(
        <PageLayout bg="dla-parafian" title="Dla Parafian">
            <div>
                <p className="font-bold text-base sm:text-lg m-0">„[…] choć istniejący porządek świata nie jest w stanie wziąć na siebie odpowiedzialności, to <span className="text-green">organizacja lokalna może coś zmienić.</span> Tam bowiem może zrodzić się większa odpowiedzialność, silne poczucie wspólnoty, szczególna zdolność do troski i bardziej wielkoduszna kreatywność, głęboka miłość do swej ziemi. Tam myśli się również o tym, co zostanie przekazane dzieciom i wnukom.„<br></br><span className="text-sm sm:text-base">(Papież Franciszek, encyklika Laudato si’, 179)</span></p>
                <p className="text-base sm:text-lg m-0 mt-8">
                    Ogrzewanie domu i opłacenie rachunków to coraz większe wyzwanie dla wielu z nas, dla wielu naszych sąsiadów i bliskich. We wspólnocie wierzących możemy razem zadbać o ciepłe domy i ciepłe kościoły. Jako chrześcijanie nie jesteśmy obojętni na problemy w naszym otoczeniu. To właśnie wiara i wspólnota Kościoła daje nam siły, by szukać rozwiązań i nieść pomoc.
                    <br></br><br></br>
                    Zachęcamy wierzących do zmiany nawyków, by odpowiedzialne korzystać z zasobów i ograniczać w jak największym stopniu ich zużycie. Wystarczy podjąć proste działania, by zadbać o siebie i swoich bliskich, a także zatroszczyć się o środowisko i zmniejszyć koszty ogrzewania.
                </p>
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