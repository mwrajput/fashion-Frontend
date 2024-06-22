import React from 'react';

const HeadingBB = () => {
    return (
        <div className="mt-16 mb-7">
            <div className="container mx-auto flex flex-col items-start">
                <div className="flex justify-between items-center w-full">
                    <span className="text-lg font-extrabold leading-[1.27] tracking-wide border-l-4 border-yellow-400 pl-2.5">
                        T-SHIRTS
                    </span>
                    <a href="#" className="text-black underline">
                        View All
                    </a>
                </div>
                <span className="text-base font-normal leading-[1.27] tracking-wide mt-1">
                    High On Demand
                </span>
            </div>
        </div>
    );
};

export default HeadingBB;
