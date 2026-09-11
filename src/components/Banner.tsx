import React from 'react';
import BannerImage from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div className="justify-center items-center flex my-6 min-h-[400px] ">
            <img src={BannerImage} alt="banner"/>
            
        </div>
    );
};

export default Banner;