import React from 'react'
import Slider from "react-slick";
import './Carousel.scss'
const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '30%', 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0', 
                },
            },
        ],
    };

    return (
        <Slider {...settings} className='carousel-container'>
            {images.map((img, index) => (
                <div key={index} className="carousel-item">
                    <img src={img} alt={`slide ${index}`} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;