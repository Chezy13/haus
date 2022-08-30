import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='wrapper'>
                <div className='footer-content'>

                    <div className='footer-content__stayPost'>
                        <h3 className='footer-content__stayPost-title'>
                            Stay posted
                        </h3>
                        <p className='footer-content__stayPost-subtitle'>
                            Let's be friends. Subscribe to our newsletter to receive
                            updates on new launches, recipes, playlists, and more.
                        </p>
                        <form className='footer-content__stayPost-subForm'>
                            <input className='footer-content__stayPost-input' type="email" placeholder='YOUR EMAIL ADDRESS' />
                            <button className='footer-content__stayPost-btn' type="submit">Submit</button>
                        </form>
                    </div>

                    <div className='footer-content__info'>
                        <div className='footer-content__info-list'> 
                            <p className='footer-content__info-title'>Explore</p>
                            <ul className='footer-content__info-link'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Membership</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Refer a Friend</a></li>
                                <li><a href="#">Corporate Gifting</a></li>
                                <li><a href="#">Gift Card</a></li>
                            </ul>
                        </div>
                        <div className='footer-content__info-list center'>
                            <p className='footer-content__info-title'>Follow</p>
                            <ul className='footer-content__info-link'>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Spotify</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ul>
                        </div>
                        <div className='footer-content__info-list'>
                            <p className='footer-content__info-title'>Drop Us a Line</p>
                            <ul className='footer-content__info-link'>
                                <li><a href="#">hello@drink.haus</a></li>
                                <li><a href="#">press@drink.haus</a></li>
                                <li><a href="#">partnerships@drink.haus</a></li>
                                <li><a href="#">jobs@drink.haus</a></li>
                                <li><a href="#">wholesale@drink.haus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className='footer-content__bottom'>
                    <li><a href="#">© Haus 2021</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;