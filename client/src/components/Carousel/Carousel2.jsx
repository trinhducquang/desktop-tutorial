import React from 'react';
import Slider from 'react-slick';
import './Carousel2.scss';

const Carousel = ({ media }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '30px',
        
       
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
        <Slider {...settings} className='carousel-2-container'>
            {media.map((item, index) => (
                <div key={index} className="carousel-2-item">
                    <img src={item.src} alt={`slide ${index}`} />
                    {/* {} */}
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
