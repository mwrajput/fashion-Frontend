// src/components/FooterLinks.jsx
import React from 'react';

const FooterLinks = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between text-white">
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">NEED HELP</h4>
          <ul className="list-none text-base">
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Track Order</a></li>
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
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Beyoungistan</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Collaboration</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Media</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">MORE INFO</h4>
          <ul className="list-none text-base">
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Term and Conditions</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Shipping Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-300">Sitemap</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8">
          <h4 className="font-bold mb-4 text-yellow-500 text-xl">LOCATION</h4>
          <ul className="list-none text-base">
            <li className="mb-2">support@beyoung.in</li>
            <li className="mb-2">Eklingpura Chouraha, Ahmedabad Main Road</li>
            <li className="mb-2">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
            <li><a href="#" className="mt-4 block hover:text-yellow-300">DOWNLOAD THE APP</a></li>
          </ul>
        </div>
      </div>
      <hr className="border-white my-8" />
    </div>
  );
};

export default FooterLinks;
