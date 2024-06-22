import React, { useState } from 'react';

const ImageSlider = () => {
  const slides = [
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/2.jpg",
      alt: "Best in Women Kurti",
      title: "Best in Women Kurti",
      label: "Kurtis"
    },
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/7.jpg",
      alt: "Online Fashion Shopping for Women Shirts",
      title: "Online Fashion Shopping for Women Shirts",
      label: "Women Shirts"
    },
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/5.jpg",
      alt: "Online Clothes Shopping for womens full sleeve t shirts",
      title: "Online Clothes Shopping for womens full sleeve t shirts",
      label: "Full Sleeve T-Shirts"
    },
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/6.jpg",
      alt: "Beyoung's online shop for women boxers",
      title: "Beyoung's online shop for women boxers",
      label: "Boxers"
    },
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/1.jpg",
      alt: "Online clothing Shopping Store for women's oversized t shirts",
      title: "Online clothing Shopping Store for women's oversized t shirts",
      label: "Oversized T-Shirts"
    },
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/3.jpg",
      alt: "Online Womens T-Shirt Shopping",
      title: "Online Womens T-Shirt Shopping",
      label: "Printed T-Shirts"
    },
    {
      link: "",
      imgSrc: "https://www.beyoung.in/api/catalog/homepage-3-10/desktop/Women/4.jpg",
      alt: "Best Online Plain T-Shirts Store",
      title: "Best Online Plain T-Shirts Store",
      label: "Plain T-Shirts"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 4 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <button
        className="absolute left-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full top-1/2 transform -translate-y-1/2 focus:outline-none"
        onClick={handlePrevClick}
      >
        &#10094;
      </button>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img className="w-full h-80 object-cover" src={slide.imgSrc} alt={slide.alt} title={slide.title} />
                <div className="p-4">
                  <span className="block text-center text-lg font-medium">{slide.label}</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full top-1/2 transform -translate-y-1/2 focus:outline-none"
        onClick={handleNextClick}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
