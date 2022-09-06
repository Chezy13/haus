import React from 'react';
import "./Reviews.css"

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className='wrapper'>
                <div className='reviews-conteiner'>
                    <div className='reviews-conteiner__content'>
                        <p className='reviews-conteiner__content-description'>
                            “Haus has found the solution I didn’t really know I was looking for!”
                        </p>
                        <p className='reviews-conteiner__content-name'>
                            — Susan
                        </p>
                        <p className='reviews-conteiner__content-status'>
                            verified buyer
                        </p>
                    </div>
                    <div className='reviews-conteiner__content'>
                        <p className='reviews-conteiner__content-description'>
                            “I love the flavor of this apéritif — it’s light and lively, and it’s refreshing with seltzer or tonic.”
                        </p>
                        <p className='reviews-conteiner__content-name'>
                            — Fiona
                        </p>
                        <p className='reviews-conteiner__content-status'>
                            verified buyer
                        </p>
                    </div>
                    <div className='reviews-conteiner__content'>
                        <p className='reviews-conteiner__content-description'>
                            “It’s delicious, and unique. I love everything from the packaging, to the flavors.”
                        </p>
                        <p className='reviews-conteiner__content-name'>
                            — Esteban
                        </p>
                        <p className='reviews-conteiner__content-status'>
                            verified buyer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;