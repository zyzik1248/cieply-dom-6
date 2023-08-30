import News from "@/components/News"
import PagesCarousel from "@/components/PagesCarousel"
import Partners from "@/components/Partners"
import ShortAbout from "@/components/ShortAbout"
import Why from "@/components/Why"

const Home = async () => {
  return (
    <div className="pt-[50px]">
      <section className="mb-24 px-big sm:px-0">
        <News/>
      </section>
      <section className="mb-24">
        <PagesCarousel/>
      </section>
      <section className="mb-24">
        <ShortAbout/>
      </section>
      <section className="mb-24">
        <Why/>
      </section>
      <section>
        <Partners/>
      </section>
    </div>
  )
}

export default Home
