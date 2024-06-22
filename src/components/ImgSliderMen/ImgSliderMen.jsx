import React, { useState } from "react";

const ImageSliderMen = () => {
  const slides = [
    {
      link: "",
      imgSrc:
        "https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/oversized.jpg",
      alt: "Best in Mens",
      title: "Best in men's Wear ",
      label: "Oversize T-Shirts",
    },
    {
      link: "",
      imgSrc:
        "https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/6.jpg",
      alt: "Online Fashion Shopping for men Shirts",
      title: "Online Fashion Shopping for men Shirts",
      label: "Plain T-Shirts",
    },
    {
      link: "",
      imgSrc:
        " https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/3.jpg",
      alt: "Online Clothes Shopping for mens full sleeve t shirts",
      title: "Online Clothes Shopping for mens full sleeve t shirts",
      label: "Full Sleeve T-Shirts",
    },
    {
      link: "",
      imgSrc:
        "https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/7.jpg",
      alt: "Beyoung's online shop for men boxers",
      title: "Beyoung's online shop for men boxers",
      label: "Boxers",
    },
    {
      link: "",
      imgSrc:
        "https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/polo.jpg",
      alt: "Online clothing Shopping Store for men's oversized t shirts",
      title: "Online clothing Shopping Store for men's oversized t shirts",
      label: "Oversized T-Shirts",
    },
    {
      link: "",
      imgSrc:
        "https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/polo.jpg",
      alt: "Online Womens T-Shirt Shopping",
      title: "Online Womens T-Shirt Shopping",
      label: "Printed T-Shirts",
    },
    {
      link: "",
      imgSrc:
        "https://www.beyoung.in/api/catalog/homepage-3-10/T-shirt-section/new/polo.jpg",
      alt: "Best Online Plain T-Shirts Store",
      title: "Best Online Plain T-Shirts Store",
      label: "Plain T-Shirts",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 4 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <button
        className="absolute left-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full top-1/2 transform -translate-y-1/2 focus:outline-none"
        onClick={handlePrevClick}
      >
        &#10094;
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-80 object-cover"
                  src={slide.imgSrc}
                  alt={slide.alt}
                  title={slide.title}
                />
                <div className="p-4">
                  <span className="block text-center text-lg font-medium">
                    {slide.label}
                  </span>
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

export default ImageSliderMen;
