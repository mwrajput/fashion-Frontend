// ThemeToggle.jsx

import React, { useState, useEffect } from 'react';
import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode); // Toggle the 'dark' class on <html> element
    localStorage.setItem('darkMode', newMode.toString()); // Store theme preference in localStorage
  };

  // Load initial theme preference from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedMode);
    document.documentElement.classList.toggle('dark', storedMode); // Apply 'dark' class on initial load
  }, []);

  return (
    <button className="text-gray-700 dark:text-gray-300" onClick={toggleTheme}>
      {darkMode ? <IoSunny className="w-6 h-6" /> : <IoMoon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;

