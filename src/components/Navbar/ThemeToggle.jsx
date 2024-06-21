import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Optional: You can save the theme preference to local storage or cookies here
    localStorage.setItem('darkMode', !darkMode);
  };

  // Load initial theme preference from local storage (if available)
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  return (
    <div className="flex items-center">
      <label htmlFor="themeToggle" className="cursor-pointer">
        <span className="sr-only">Toggle dark mode</span>
        <div
          className={`w-12 h-6 bg-gray-400 rounded-full p-1 duration-300 ease-in-out ${
            darkMode ? 'bg-gray-800' : 'bg-yellow-300'
          }`}
          onClick={toggleTheme}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              darkMode ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </label>
      <span className="ml-3">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeToggle;
