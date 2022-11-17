import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ width = 360, height = 360, payload }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: payload?.config?.autoPlay || false,
        autoplaySpeed: 2000
    };

    const redirectHandler = (redirectUrl) => {
        if (redirectUrl && redirectUrl !== "") window.open(redirectUrl, '_blank')
    }

    const imgUrls = payload?.assets?.length ? payload?.assets : payload?.default

    return (
        <Slider {...settings}>
            {
                imgUrls.map((url, index) => {
                    return <img src={url} alt='' style={{ width: `${width}px`, height: `${height}px` }} key={index} onClick={() => redirectHandler(payload?.redirectUrls?.[index])} />
                })
            }
        </Slider>
    )
}

export default Carousel