import React from 'react';
import CB from "../../img/ContentBanner.png";
import './Content.css';

const Content = () => {
    return (
        <section className='content' id="ourstory">
            <div className='wrapper'>
                <div className='content-conteiner'>
                    <div className='content-conteiner__right'>
                        <div className='content-conteiner__right-text'>
                            <p className='right-text__title'>
                                Easy to drink
                            </p>
                            <p className='right-text__description'>
                                The perfect anytime drink, sip Haus on its own or with simple mixers you probably already have like soda or tonic.
                            </p>
                        </div>
                        <div className='content-conteiner__right-text'>
                            <p className='right-text__title__upFS'>
                                Natural ingredients. Nothing fake.
                            </p>
                            <p className='right-text__description'>
                                Artificial ingredients and refined sugars are a big culprit in hangovers.
                                Feel good about what’s in your glass that night — and the next day.
                            </p>
                        </div>
                        <div className='content-conteiner__right-text'>
                            <p className='right-text__title'>
                                Delivered to your door
                            </p>
                            <p className='right-text__description'>
                                We blend, bottle, and ship our products straight from Sonoma, CA to your doorstep.
                            </p>
                        </div>
                    </div>
                    <div className='content-conteiner__left'>
                        <img src={CB} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;