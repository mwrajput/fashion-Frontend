import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/banner/HeroBanner"; 
import CustomCarousel from './components/Carousel/CustomCarousel';
import AdsImage from './components/DisplayAds/AdsImage'; // Import AdsImage component

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="container container-home-desktop flex flex-col md:flex-row items-center justify-center">
        <CustomCarousel className="w-full md:w-3/4" />

        <div className="addImage flex justify-center mt-6 md:mt-0">
          <AdsImage
            imageUrl="https://www.beyoung.in/api/catalog/homepage-5-dec/urban-section-deskto111p1-v1i1ew.jpg"
            linkUrl="https://www.example.com"
            altText="Summer Boxer"
            title="Urban Shirts"
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default App;
