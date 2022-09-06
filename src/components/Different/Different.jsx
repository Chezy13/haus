import React from 'react';
import "./Different.css"
import D from "../../img/Different2.jpg";

const Different = () => {
    return (
        <section className='different'>
            <div className='wrapper'>
                <div className='different-container'>
                    <div className='different-container__img'>
                        <img src={D} alt="img" />
                    </div>
                    <div className='different-container__text'>
                        <h2 className='different-container__text-title'>
                            We do things differently than most producers
                        </h2>
                        <p className='different-container__text-description'>
                            Our flavors are derived from real fruits, herbs, and botanicals, not ingredients from a lab.
                            We leave out the artificial ingredients and excess sugar, and tell you what’s inside.
                            It’s a better way to drink.
                        </p>
                    </div>
                </div>
            </div>          
        </section>
    );
};

export default Different;