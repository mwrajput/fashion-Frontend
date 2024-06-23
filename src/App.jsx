import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/banner/HeroBanner";
import CustomCarousel from "./components/Carousel/CustomCarousel";
import AddvertisePIc from "./components/banner/AddvertisePIc";
import FooterLinks from "./components/Footer/FooterLinks";
import ForMen from "./components/Header/ForMen";
import HeadingBB from "./components/Header/HeadingBB";
import ImageSlider from "./components/Imslider/ImageSlider";
import Strip from "./components/StripImg/Strip";
import ImgSliderMen from "./components/ImgSliderMen/ImgSliderMen";
import Pricing from "./components/pricingSlider/Pricing";
import ShopTheLook from "./components/ShoptheLook/ShopTheLook";
import FeaturedOn from "./components/FeaturedOn/FeaturedOn";


const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroBanner />
      </header>

      <main>
        <div className="container mb-14 mt-14 px-15">
          <CustomCarousel />
          <AddvertisePIc />
          <Pricing />
          <Strip />
          <ForMen />
          <HeadingBB />
          <ImageSlider />
          <ForMen data="Men" />
          <HeadingBB />
          <ImgSliderMen />
          <ShopTheLook/>
          <FeaturedOn/>
        </div>
      </main>

      <footer>
        <FooterLinks />
      </footer>
    </>
  );
};

export default App;
