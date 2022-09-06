import React from 'react';
import "./Mood.css"

const Mood = () => {
    return (
        <section className='mood'>
            <div className='wrapper'>
                <div className='mood-container'>
                    <div className='mood-container__content'>
                        <div className='mood-container__content-spotify'>
                            <h3 className='spotify-title'>
                                Set the mood
                            </h3>
                            <p className='spotify-description'>
                                Curated playlists from Woody + Helena, plus some of our friends and favorite brands.
                            </p>
                            <a target="_blank" href="https://open.spotify.com/" className='spotify-button'>Spotify</a>
                        </div>
                        <div className='mood-container__content-links'>
                            <p className='links-text'>
                                Follow us, share us, drink Ha(us)
                            </p>
                            <div className='links-media'>
                                <a target="_blank" className='links-media__link' href="https://www.instagram.com/">Instagram</a>
                                <a target="_blank" className='links-media__link' href="https://twitter.com/">Twitter</a>
                                <a target="_blank" className='links-media__link' href="https://ru-ru.facebook.com/">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mood;