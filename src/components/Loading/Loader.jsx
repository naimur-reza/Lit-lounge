import React from 'react';

const Loader = () => {
    return (
        <div className='flex text-4xl lg:text-7xl items-center min-h-[calc(100vh-145px)] justify-center'>
            <h1>L</h1>
            <h1 className='lg:h-12 lg:w-12 h-6 w-6 lg:mt-4 mt-2 border-dashed border-4 rounded-full border-red-500 animate-spin'></h1>
            <h1>a</h1>
            <h1>d</h1>
            <h1>i</h1>
            <h1>n</h1>
            <h1>g</h1>....
        </div>
    );
};

export default Loader;