import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroBanner = () => {
  return (
    <div className="relative z-0 mt-16 mb-5 ">
      <Carousel 
         autoPlay
         infiniteLoop
         interval={2000}  // Change slide every 3 seconds
         showThumbs={false}
         showStatus={false}
         swipeable  // Allows manual dragging
         emulateTouch  // Emulate touch event to allow dragging
         stopOnHover  // Stop auto play on hover
      >
        <div className="topbanner-single">
          <a href="https://www.beyoung.in/plain-t-shirt-combo-pick-any-4">
            <img 
              src="https://www.beyoung.in/api/catalog/birthday-2024/Desktop/banner/Plain-T-Shirts-banner-12desktop12-view.jpg" 
              alt="Online shopping site for mens shirts" 
              title="Online shopping site for mens shirts" 
              className="w-full"
            />
          </a>
        </div>
        <div className="topbanner-single">
          <a href="https://www.beyoung.in/mens-shirts">
            <img 
              src="https://www.beyoung.in/api/catalog/birthday-2024/Desktop/banner/shirt-banner-desktop-view1233.jpg" 
              alt="Online shopping site for mens shirts" 
              title="Online shopping site for mens shirts" 
              className="w-full"
            />
          </a>
        </div>
        <div className="topbanner-single">
          <a href="https://www.beyoung.in/clearance-sale">
            <img 
              src="https://www.beyoung.in/api/catalog/clearance/clearance-sale-banner-desktop1211.jpg" 
              alt="Online shopping site for mens shirts" 
              title="Online shopping site for mens shirts" 
              className="w-full"
            />
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
