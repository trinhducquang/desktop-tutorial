import React from 'react';
import Slider from 'react-slick';
import './Carousel2.scss';

const Carousel = ({ media, title }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '40px',

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
        <div className='carousel-container'>
            <p className='carousel-title'>{title}</p>
            <Slider {...settings} className='carousel-2-container'>
                {media.map((item, index) => (
                    <div key={index} className="carousel-2-item">
                        <img src={item.src} alt={`slide ${index}`} />
                        <div className='carousel-2-item-1'>
                            <span className='item-caption'>{item.caption}</span>
                            <span className='item-price'>{item.price}</span>
                            <div>
                                <button className='add-to-cart-button'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
