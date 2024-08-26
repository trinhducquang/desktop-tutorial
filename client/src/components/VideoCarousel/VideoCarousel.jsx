import './VideoCarousel.scss';
import Slider from 'react-slick';

const VideoCarousel = ({ media }) => {
    const settingsMain = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsInner = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settingsMain} className='video-carousel-container'>
            {media.map((item, index) => (
                <div key={index} className='video-carousel-container-item'>
                    <div className='video-container'>
                        <Slider {...settingsInner}>
                            {item.videos.map((videoSrc, idx) => (
                                <div key={idx}>
                                    <video src={videoSrc} autoPlay muted loop />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='text-container'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    {item.img && (
                        <div className='small-video-container'>
                            <img src={item.img} muted loop />
                        </div>
                    )}
                </div>
            ))}
        </Slider>
    );
};

export default VideoCarousel;
