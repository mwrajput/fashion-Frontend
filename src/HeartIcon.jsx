import React from 'react';

const HeartIcon = () => {
  const handleClick = () => {
    console.log('Heart icon clicked'); // Placeholder for future functionality
    // future logic here
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8.06253C22 15.0874 12.0004 21 12.0004 21C12.0004 21 2 15 2 8.07677C2 5.25003 4.22222 3.00003 7 3.00003C9.77778 3.00003 12 6.37503 12 6.37503C12 6.37503 14.2222 3.00003 17 3.00003C19.7778 3.00003 22 5.25003 22 8.06253Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HeartIcon;
