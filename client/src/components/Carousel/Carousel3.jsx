import React from 'react';
import Slider from 'react-slick';
import './Carousel3.scss';

const Carousel = ({ media }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '0px'
    };

    return (
        <div className='carousel-new-container'>
            <Slider {...settings} className='carousel-new-slider'>
                {media.map((item, index) => (
                    <div key={index} className="carousel-new-item">
                        <img src={item.src} alt={`slide ${index}`} />
                        <div className='carousel-new-item-info'>
                            <span className='carousel-item-caption'>{item.caption}</span>
                            <span className='carousel-item-price'>{item.price}</span>
                            <div>
                                <button className='carousel-add-to-cart-button'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
