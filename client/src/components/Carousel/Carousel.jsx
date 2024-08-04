import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';

const Carousel = ({ media }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '25%',
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
            {media.map((item, index) => (
                <div key={index} className="carousel-item">
                    {item.type === 'image' ? (
                        <img src={item.src} alt={`slide ${index}`} />
                    ) : (
                        <video controls>
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
