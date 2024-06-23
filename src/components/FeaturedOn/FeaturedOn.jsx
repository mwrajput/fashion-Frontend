import React from "react";

const FeaturedOn = () => {
  // Array of image URLs
  const imageUrls = [
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/1.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/2.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/3.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/4.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/5.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Deccan-Herald.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/ET-Retail.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Mid-Day.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/VCCircle.jpg",
  ];

  return (
    <div className="mt-8 ">
    {/* Heading */}
        <p className="text-4xl font-bold text-black mt-8  border-b-4 border-yellow-300 inline-block">
        FEATURED ON
        </p>
        <div className="flex items-center justify-center  mb-8 overflow-hidden">
        {/* Marquee container */}
        <div className="flex space-x-8 overflow-x-auto marquee">
            {/* Images */}
            {imageUrls.map((imageUrl, index) => (
            <div key={index} className="max-w-full overflow-hidden">
                <img
                src={imageUrl}
                alt="Beyoung PR"
                title="Beyoung PR"
                className="w-auto h-32 md:h-40 lg:h-52 object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            ))}
        </div>
        </div>
    </div>

  );
};

export default FeaturedOn;
