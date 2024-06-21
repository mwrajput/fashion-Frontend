import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  "https://www.beyoung.in/api/catalog/birthday-2024/Desktop/offer/6.jpg",
  "https://www.beyoung.in/api/catalog/birthday-2024/Desktop/offer/8.jpg",
  "https://www.beyoung.in/api/catalog/birthday-2024/Desktop/offer/1.jpg",
  "https://www.beyoung.in/api/catalog/birthday-2024/offer-stripes/St1rip1-desktop-view.jpg",
  "https://www.beyoung.in/api/catalog/birthday-2024/Desktop/offer/3.jpg",
  "https://www.beyoung.in/api/catalog/birthday-2024/Desktop/offer/4.jpg",
  "https://www.beyoung.in/api/catalog/birthday-2024/Desktop/offer/5.jpg"
];

const CustomCarousel = () => {
  return (
    
    <div className="swiper-strip swiper-container-horizontal mb-5" style={{ paddingTop: '50px' }}>
      <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          swipeable
          emulateTouch
          stopOnHover
          className="w-full">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide" style={{ width: '100%', marginRight: '30px' }}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
            </div>
          ))}
        </Carousel>
      </div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  );
};

export default CustomCarousel;
