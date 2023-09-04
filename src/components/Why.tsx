import Link from "next/link"
import Button from "./Button"
import SingleWhy from "./SingleWhy"
import { urls } from "@/utilis/urls"

const Why = () =>{
    const points = [
        {
            title: '„Mamy możliwość przygotowania lepszego jutra dla wszystkich. Z Bożych rąk otrzymaliśmy ogród. Nie możemy naszym dzieciom pozostawiać pustyni” papież Franciszek', 
            text: 'Wierzymy, że poprzez program Ciepły Dom - Ciepły Kościół możemy działać  pozytywnie patrząc z ufnością w przyszłość, do której Bóg prowadzi nas i nasze wspólnoty. Konkretne zmiany w naszym stylu życia, sposobie budowania i używania budynków, korzystania z dóbr materialnych to odpowiedź serca na wezwanie do przygotowania lepszego jutra dla wszystkich',
            image: "/icon.png"
        },
        {
            title: 'Trzeba więc pobudzać i popierać “nawrócenie ekologiczne”, które w ostatnich dziesięcioleciach sprawiło, że ludzkość stała się bardziej wrażliwa na niebezpieczeństwo katastrofy, do jakiej zmierzaliśmy. Człowiek, który zamiast być “sługą” Stwórcy stał się niezależnym despotą, zaczyna rozumieć, że musi się zatrzymać w obliczu otchłani”  św.Jan Paweł II', 
            text: 'Program Ciepły Dom - Ciepły Kościół to inicjatywa która wspierać ma ekologiczne nawrócenie, do którego wzywał św, Jan Paweł II. Nawracając się do Chrystusa widzimy Jego pełną miłości obecność we wszystkich braciach i siostrach oraz w całym stworzeniu. Dlatego działamy, by zmniejszać zanieczyszczenie środowiska i wspierać ludzi. Zachwyt nad pięknem i bogactwem świata wzmacnia naszą postawę odpowiedzialności za otrzymane dary.',
            image: "/icon.png"
        },
        {
            title: '“Chrześcijańska ekologia jest pro-life, (...) proponuje duchowość (...) uważną na sytuację ludzi ubogich i doświadczanych współczesnymi kryzysami, jak kryzys społeczny, energetyczny czy klimatyczny” przewodniczący Konferencji Episkopatu Polski, abp Stanisław Gądecki.', 
            text: 'Ekologia integralna, którą kierujemy się w programie Ciepły Dom - Ciepły Kościół  uwrażliwia nas na aktualne wyzwania w naszym otoczeniu. Widzimy coraz więcej osób dotkniętych ubóstwem energetycznym, problemy z drożejącym opałem, nieocieplone domy.  To właśnie wiara i wspólnota Kościoła daje nam siły, by szukać rozwiązań i nieść pomoc',
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