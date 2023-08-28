'use client'

import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ItemCarousel from "./ItemCarousel"
import { urls } from "@/utilis/urls"

const PagesCarousel = () => {

    return (
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} emulateTouch interval={5000} showArrows={false}>
            {urls.carousel.map(page=>(
                <ItemCarousel key={page.url} {...page}/>
            ))}
        </Carousel>
    )
}

export default PagesCarousel