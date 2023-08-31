import News from "@/components/News"
import PagesCarousel from "@/components/PagesCarousel"
import Partners from "@/components/Partners"
import ShortAbout from "@/components/ShortAbout"
import Why from "@/components/Why"
import { NewsQuery } from "@/types"

async function getData() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetNews1 {
          news1(orderBy: postedDate_ASC) {
            id
            title
            date
            postedDate
            slug
            description {
              html
            }
            imagePreview {
              id
              url
            }
            image {
              id
              url
            }
          }
        }`,
    }),
    next: { revalidate: 1200000 }
  });

  const json = await response.json();
  return json.data.news1.length ? json.data.news1[0] as NewsQuery : null;
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
