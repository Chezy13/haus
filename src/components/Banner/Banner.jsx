import React from 'react';
import Header from '../Header/Header';
import "./Banner.css"


const Banner = () => {
    return (
        <main className='banner'>
            <div className='wrapper'>
                <Header/>
                <div className='banner-content__wrapper'>
                    <div className='banner-content'>
                        <h1 className='banner-content__title'>
                            Alcohol for the modern drinker
                        </h1>
                        <p className='banner-content__subtitle'>
                            Light and refreshing flavors made with real, clean ingredients you can feel good about.
                            Just pour, sip, and enjoy.
                        </p>
                        <a href="#shop" className='banner-content__button'>Shop ALL</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;