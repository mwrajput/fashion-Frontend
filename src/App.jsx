import React from 'react';
import SearchBar from './SearchBar'; // Adjust path as per your project structure
// import SearchIcon from './SearchIcon'; // Adjust path as per your project structure
import ShoppingBagIcon from './ShoppingBagIcon'; // Adjust path as per your project structure
import HeartIcon from './HeartIcon'; // Adjust path as per your project structure

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Toggle Icon (on mobile) */}
        <div className="flex items-center">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-10" />
          {/* Toggle Icon for Mobile */}
          <button className="ml-auto text-white md:hidden">
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

        {/* Navigation Links - Example */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Women
          </a>
          <a href="#" className="hover:text-gray-300">
            Men
          </a>
          <a href="#" className="hover:text-gray-300">
            Kids
          </a>
          <a href="#" className="hover:text-gray-300">
            Accessories
          </a>
          <a href="#" className="hover:text-gray-300">
            Sports
          </a>
          <a href="#" className="hover:text-gray-300">
            Sale
          </a>
          <a href="#" className="hover:text-gray-300">
            The Juice
          </a>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Heart Icon - Example */}
          <HeartIcon onClick={() => console.log('Heart icon clicked')} />

          {/* Shopping Bag Icon - Example */}
          <ShoppingBagIcon onClick={() => console.log('Shopping bag icon clicked')} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
