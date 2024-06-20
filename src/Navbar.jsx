import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ShoppingBagIcon from './ShoppingBagIcon';
import HeartIcon from './HeartIcon';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-white text-black p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo and Toggle Icon (for mobile) */}
        <div className="flex items-center w-full justify-between md:w-auto">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-10" />
          {/* Toggle Icon for Mobile */}
          <button className="text-black md:hidden" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex ${showMobileMenu ? 'block' : 'hidden'} w-full md:w-auto`}>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            Women
          </a>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            Men
          </a>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            Kids
          </a>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            Accessories
          </a>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            Sports
          </a>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            Sale
          </a>
          <a href="#" className="block md:inline-block text-black hover:text-gray-700 py-2 px-4">
            The Juice
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Heart Icon */}
          <HeartIcon onClick={() => console.log('Heart icon clicked')} />
          {/* Shopping Bag Icon */}
          <ShoppingBagIcon onClick={() => console.log('Shopping bag icon clicked')} />
        </div>
      </div>

      {/* Search bar and icons for mobile */}
      <div className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'} w-full`}>
        <div className="p-4">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center space-x-4 p-4">
          <HeartIcon onClick={() => console.log('Heart icon clicked')} />
          <ShoppingBagIcon onClick={() => console.log('Shopping bag icon clicked')} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
