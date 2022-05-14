import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl 1.png'
import HomeBannerInput from './HomeBannerInput';
const HomeBanner = () => {
    return (
        <div>
            <div class="hero bg-accent  px-5 py-5 md:px-2 md:py-0">
                <div class="hero-content px-1 py-0 flex-col lg:flex-row md:gap-16">
                    <div>
                        <p>Best Quality</p>
                        <h1 class="text-5xl font-bold"> Professional Cleaning <br /> Service</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div ata-aos="fade-down-left" className='shrink-0'>
                        <img  ata-aos="fade-down-left" className='w-[422px] mx-auto' src={bucketgirl} alt='' />
                    </div>
                </div>
            </div>
            <HomeBannerInput></HomeBannerInput>
        </div>
    );
};

export default HomeBanner;