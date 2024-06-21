import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/banner/HeroBanner"; 
import CustomCarousel from './components/Carousel/CustomCarousel';
import AddvertisePIc from './components/banner/AddvertisePIc'; 
import FooterLinks from './components/Footer/FooterLinks';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroBanner />
      </header>

      <main>
      <div className="container mx-auto flex flex-col items-center">
        <CustomCarousel />
      </div>
        <AddvertisePIc /> 
      </main>

      <footer>
      <FooterLinks /> 
      </footer>
    </> 
  );
};

export default App;
