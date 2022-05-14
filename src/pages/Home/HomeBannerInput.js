import React from 'react';

const HomeBannerInput = () => {
    return (
        <div className='shadow-lg  p-4  bg-slate-100 w-5/6 mx-auto relative rounded-2xl mt-[-40px] z-50'>
            <h1 className='text-2xl text-primary font-medium mb-5'>Get Free Estimate</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" />
            </div>
            <button className='btn btn-primary mt-5'>REQUEST A QOUTE</button>
        </div>
    );
};

export default HomeBannerInput;