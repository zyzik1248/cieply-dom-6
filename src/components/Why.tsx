import Link from "next/link"
import Button from "./Button"
import SingleWhy from "./SingleWhy"
import { urls } from "@/utilis/urls"

const Why = () =>{
    const points = [
        {
            title: '"Potrzebna jest dziś nowa « wyobraźnia miłosierdzia», której przejawem będzie nie tyle i nie tylko skuteczność pomocy, ale zdolność bycia bliźnim dla cierpiącego człowieka, solidaryzowania się z nim, tak aby gest pomocy nie był odczuwany jako poniżająca jałmużna, ale jako świadectwo braterskiej wspólnoty dóbr." JPII', 
            text: 'Jako chrześcijanie/katolicy patrzymy na problemy nie tylko przez pryzmat rozwiązań praktycznych, ale właśnie solidaryzowania się z potrzebującymi, współodczuwania i braterstwa. I że to jest też ten wkład który możemy wnieść w życie publiczne jako ludzie wierzący.',
            image: "/icon.png"
        },
        {
            title: ` “Chrześcijańska ekologia jest pro-life, (...) proponuje duchowość antykonsumpcyjną, (...) uważną na sytuację ludzi ubogich i doświadczanych współczesnymi kryzysami, 
            jak kryzys społeczny, energetyczny czy klimatyczny” 
            przewodniczący Konferencji Episkopatu Polski, abp Stanisław Gądecki.
            `, 
            text: `Jako chrześcijanie nie jesteśmy obojętni na problemy w naszym otoczeniu. To właśnie wiara i wspólnota Kościoła daje nam siły, by szukać rozwiązań i nieść pomoc 
            <br>
            Drogą wyjścia z kryzysu jest droga do przodu: w kierunku efektywności energetycznej i neutralności klimatycznej.
            `,
            image: "/icon.png"
        },
        {
            title: `„[…] choć istniejący porządek świata nie jest w stanie wziąć na siebie odpowiedzialności, to organizacja lokalna może coś zmienić. Tam bowiem może zrodzić się większa odpowiedzialność, silne poczucie wspólnoty, szczególna zdolność do troski i bardziej wielkoduszna kreatywność, głęboka miłość do swej ziemi. Tam myśli się również o tym, co zostanie przekazane dzieciom i wnukom.„
            (Papież Franciszek, encyklika Laudato si’, 179)
            `, 
            text: `Źle ogrzewane i zabezpieczone budynki szybko niszczeją i tracą na wartości. Jeśli chcemy żeby dobrze służyły naszym dzieciom i wnukom przez lata warto w nie mądrze zainwestować korzystając z dostępnych programów pomocowych. 
            `,
            image: "/icon.png"
        },
    ]

    return(
        <div className="px-big pt-[100px] mt-[-100px]" id="dlaczego-pomagamy">
            <h3 className="text-xl font-extrabold sm:text-2xl">Dlaczego pomagamy?</h3>
            <div className="grid grid-cols-1 pt-extrabig gap-1 mb-12 w-fit m-auto sm:grid-cols-2 lg:grid-cols-3">
                {points.map((point, index)=>(
                    <SingleWhy key={index} id={index} {...point}/>
                ))}
            </div>
            <Link href={urls.nav.download.url} className="w-fit flex m-auto">
                <Button text="DO POBRANIA"/>
            </Link>
        </div>
    )
}

export default Why