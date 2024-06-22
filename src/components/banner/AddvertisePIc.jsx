import React from 'react';
// import backgroundImage from '../../assets/b2.jpg'; 

const AddvertisePIc = () => {
  return (
    <section 
      id="banner" 
      className="flex flex-col items-center justify-center text-center bg-cover bg-center mt-16 mb-20 w-full h-96 bg-zinc-600"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h4 className="text-lg font-semibold text-white mt-10">Fashion Point</h4>
      <h2 className="text-2xl font-bold text-white mt-2">
        Upto | <span className="text-red-500">70% off</span> - All T-shirts and Accessories
      </h2>
      <button className="mt-4 py-2 px-4 bg-white text-black bold rounded hover:bg-blue-900 hover:text-white transition-colors duration-300 py-2 px-4 rounded">
        Explore More
      </button>
    </section>
  );
};

export default AddvertisePIc;
