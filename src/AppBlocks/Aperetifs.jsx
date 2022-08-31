import React from 'react';
import AB from "../img/AperetifsBanner.png";

const Aperetifs = () => {
    return (
        <section className='aperetifs'>
            <div className='wrapper'>
                <div className='aperetifs-container'>
                    <img className='aperetifs-container__img' src={AB} alt="img" />
                    <div className='aperetifs-container__text'>
                        <h3 className='aperetifs-container__text-title'>
                            An intro to apéritifs
                        </h3>
                        <p className='aperetifs-container__text-description'>
                        Apéritifs are a category of spirits with complex flavors derived from fruits, herbs, and botanicals.
                        Their lighter alcohol content (less than whiskey, more than wine) makes them perfect to sip all evening.
                        </p>
                    </div>
                </div>
            </div>           
        </section>
    );
};

export default Aperetifs;