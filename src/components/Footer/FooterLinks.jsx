import React from 'react';

const FooterLinks = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between text-white">
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">NEED HELP</h4>
          <ul className="list-none text-base">
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Returns & Refunds</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">FAQ's</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Career</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">COMPANY</h4>
          <ul className="list-none text-base">
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Blog</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">MORE INFO</h4>
          <ul className="list-none text-base">
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Term and Conditions</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Shipping Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">LOCATION</h4>
          <ul className="list-none text-base">
            <li className="mb-2">Our Website</li>
            <li className="mb-2">Xyz street abc Road</li>
            <li className="mb-2">(Near) City, Country</li>
          </ul>

          {/* Additional Section */}
          <h4 className="font-bold mt-8 mb-4 text-yellow-500 text-xl">DOWNLOAD THE APP</h4>
          <div className="flex">
            <a href="#" className="mr-4">
              <img className="w-24 h-auto" src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png" alt="android app" />
            </a>
            <a href="#">
              <img className="w-24 h-auto" src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png" alt="ios app" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
