import img6 from '/public/pre-owned/img6.avif';
import img7 from '/public/pre-owned/img7.avif';
import img8 from '/public/pre-owned/img8.avif';
import img9 from '/public/pre-owned/img9.avif';
import img10 from '/public/pre-owned/img10.avif';
import img11 from '/public/pre-owned/img11.avif';

import img12 from '/public/Whispers/1.jpg';
import img13 from '/public/Whispers/2.jpg';
import img14 from '/public/Whispers/3.jpg';
import img15 from '/public/Whispers/4.jpg';
import img16 from '/public/Whispers/5.jpg';
import img17 from '/public/Whispers/6.jpg';

import img18 from '/public/Careers/img18.jpg';
import img19 from '/public/Careers/img19.jpg';
import img20 from '/public/Careers/img20.jpg';
import img21 from '/public/Careers/img21.jpg';
import img22 from '/public/muse/Page6/img5.webp';
import img23 from '/public/muse/Page6/img6.webp';
import img24 from '/public/muse/Page6/img8.webp';



import img4 from '/public/Careers/img4.jpg';
import img3 from '/public/Careers/img3.jpg';


import video1 from '/public/Careers/video1.mp4';
import video2 from '/public/Careers/video2.mp4';
import video3 from '/public/Careers/video3.mp4';
import video4 from '/public/Careers/video4.mp4';
import video5 from '/public/Careers/video5.mp4';


import video6 from '/public/InspiringSeries/Episode1.mp4'
import video7 from '/public/InspiringSeries/Episode2.mp4'
import video8 from '/public/InspiringSeries/Episode3.mp4'
import video9 from '/public/InspiringSeries/Episode4.mp4'
import video10 from '/public/InspiringSeries/Episode5.mp4'
import video11 from '/public/InspiringSeries/Episode6.mp4'
import video12 from '/public/InspiringSeries/Episode7.mp4'
import video13 from '/public/InspiringSeries/Episode8.mp4'
import video14 from '/public/InspiringSeries/Episode9.mp4'


const PreownedMedia = [
    { type: 'image', src: img6 },
    { type: 'image', src: img7 },
    { type: 'image', src: img8 },
    { type: 'image', src: img9 },
    { type: 'image', src: img10 },
    { type: 'image', src: img11 },
];

const WhispersMedia = [
    { type: 'image', src: img12, caption: 'Accessories Wheels Set', price: '$170.00' },
    { type: 'image', src: img13, caption: 'Accessories Luggage Tag', price: '$170.00' },
    { type: 'image', src: img14, caption: 'Accessories Luggage Tag', price: '$170.00' },
    { type: 'image', src: img15, caption: 'Stickers New York Luggage', price: '$170.00' },
    { type: 'image', src: img16, caption: 'Travel Accessories Cabin', price: '$170.00' },
    { type: 'image', src: img17, caption: 'Essential Cabin Accessories', price: '$170.00' },
];

const CareersMedia = [
    { type: 'image', src: img18 },
    { type: 'image', src: img19 },
    { type: 'image', src: img20 },
    { type: 'image', src: img4 },
    { type: 'image', src: img3 },
    { type: 'image', src: img21 },
];


const Page6img = [
    { type: 'image', src: img22 },
    { type: 'image', src: img23 },
    { type: 'image', src: img24 },
];


const mediaData = [
    {
        videos: [video1, video2],
        title: 'GHIZLANE SAHLI',
        description: 'The Marrakech-based winner of the Spirit of Ecstacy Challenge rejoices freedom and the human form in a celebration of femininity in all its facets.',
        img: img4,
    },
    {
        videos: [video4, video5],
        title: 'SCARLETT YANG',
        description: 'The London-based winner of the Spirit of Ecstacy Challenge explores nature, humanity and technological approaches that intercept design.',
        img: img3,
    },
    // Thêm các phần tử khác nếu cần
];


const CareersVideo = [
    { type: 'video/mp4', src: video1 },
    { type: 'video/mp4', src: video2 },
    { type: 'video/mp4', src: video3 },
    { type: 'video/mp4', src: video4 },
    { type: 'video/mp4', src: video5 },
];

const epstion3 = [
    { type: 'video/mp4', src: video6 },
    { type: 'video/mp4', src: video7 },
    { type: 'video/mp4', src: video8 },
    { type: 'video/mp4', src: video9 },
    { type: 'video/mp4', src: video10 },
];

const epstion2 = [
    { type: 'video/mp4', src: video11 },
    { type: 'video/mp4', src: video12 },
    { type: 'video/mp4', src: video13 },
    { type: 'video/mp4', src: video14 },
    { type: 'video/mp4', src: video15 },
];


export { PreownedMedia, WhispersMedia, CareersMedia, CareersVideo, mediaData, Page6img, epstion3, epstion2 };

