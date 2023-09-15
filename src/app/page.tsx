import News from "@/components/News"
import PagesCarousel from "@/components/PagesCarousel"
import Partners from "@/components/Partners"
import ShortAbout from "@/components/ShortAbout"
import Why from "@/components/Why"
import { NewsQuery } from "@/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Ciepły dom - Ciepły kościół | Strona główna',
  description: 'Program „Ciepły Dom - Ciepły Kościół” powstał, by promować solidarne wspólnoty parafialne, w których razem zadbamy o ciepło w naszych domach i parafiach, oraz wesprzemy tych, którym grozi ubóstwo energetyczne.',
}

async function getData() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: false },
      cache: "no-store"
    });
    
    const data = await response.json();
    return data.length ? data[0] as NewsQuery : null;
  } catch(error){
    console.log(error)
    return null
  }
}

const Home = async () => {
  const news = await getData()

  return (
    <div className="pt-[50px]">
      <section className="mb-24 px-big sm:px-0">
        {
          news &&
          <News {...news} />
        }
      </section>
      <section className="mb-24">
        <PagesCarousel />
      </section>
      <section className="mb-24">
        <ShortAbout />
      </section>
      <section className="mb-24">
        <Why />
      </section>
      <section>
        <Partners />
      </section>
    </div>
  )
}

export default Home
