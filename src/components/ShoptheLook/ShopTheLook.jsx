import React from "react";

const ShopTheLook = () => {
  return (
    <div className="mt-12 ">
      {/* Heading */}
      <div className="flex justify-between items-center w-full mb-8">
        <span className="text-2xl font-bold leading-[1.27] tracking-wide border-l-4 border-yellow-400 pl-2.5">
          SHOP THE LOOK
        </span>
      </div>

      {/* Images */}
      <div className="flex justify-center space-x-4 ">
        {/* First shop-the-look image */}
        <a
          href="#"
          className="block relative rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://www.beyoung.in/api/catalog/homepage-3-10/shop-the-look/1.jpg"
            alt="Stylish looks for men online"
            title="Stylish looks for men online"
            className="lazyload fade transform hover:scale-105 transition duration-300"
          />
        </a>

        {/* Second shop-the-look image */}
        <a
          href="#"
          className="block relative rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://www.beyoung.in/api/catalog/homepage-3-10/shop-the-look/2.jpg"
            alt="Shop the look at beyoung"
            title="Shop the look at beyoung"
            className="lazyload fade transform hover:scale-105 transition duration-300"
          />
        </a>

        {/* Third shop-the-look image */}
        <a
          href="#"
          className="block relative rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/3.jpg"
            alt="Shop perfect look for every occasion"
            title="Shop perfect look for every occasion"
            className="lazyload fade transform hover:scale-105 transition duration-300"
          />
        </a>

        {/* Fourth shop-the-look image */}
        <a
          href="#"
          className="block relative rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://www.beyoung.in/api/catalog/homepage-3-10/shop-the-look/4.jpg"
            alt="Looks for men online"
            title="Looks for men online"
            className="lazyload fade transform hover:scale-105 transition duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default ShopTheLook;
