import React from 'react';

const ForWomen = ({data='Women'}) => {
    return (
        <div className="mt-16 flex items-center bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full justify-center">
            <p className="text-black text-[25px] font-bold py-[15px]">{data}</p>
        </div>
    );
};

export default ForWomen;
