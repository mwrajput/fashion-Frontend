import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/banner/HeroBanner"; 
import CustomCarousel from './components/Carousel/CustomCarousel';
import AddvertisePIc from './components/banner/AddvertisePIc'; 
import FooterLinks from './components/Footer/FooterLinks';
import ForMen from './components/Header/ForMen';
import HeadingBB from './components/Header/HeadingBB';
import ImageSlider from './components/Imslider/ImageSlider';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroBanner />
      </header>

      <main>
          <div className="container mx-auto px-15">
                  <CustomCarousel />
                  <AddvertisePIc /> 
                  <ForMen />
                  <HeadingBB />
                  <ImageSlider />
          </div>
        
        </main>

      <footer>
      <FooterLinks /> 
      </footer>
    </> 
  );
};

export default App;
