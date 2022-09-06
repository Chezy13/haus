import React from 'react';
import Logo1 from "../../img/Logo1.png";
import Logo2 from "../../img/Logo2.png";
import Logo3 from "../../img/Logo3.png";
import './Description.css';

const Description = () => {
    return (
        <section className='description'>
            <div className='wrapper'>
                <div className='description-content'>
                    <div className='description-content__block'>
                        <p className='description-content__block-text'>
                            "What makes Haus so special is its incredible flavors."
                        </p>
                        <img src={Logo1} alt="logo" />
                    </div>
                    <div className='description-content__block'>
                        <p className='description-content__block-text'>
                            “For the wine or cocktail lover who’s tried it all and wants something new and refreshing.”
                        </p>
                        <img src={Logo2} alt="logo" />
                    </div>
                    <div className='description-content__block'>
                        <p className='description-content__block-text'>
                            “Cleaner, responsibly sourced, and lower in alcohol.”
                        </p>
                        <img src={Logo3} alt="logo" />
                    </div>
                </div>
            </div>           
        </section>
    );
};

export default Description;