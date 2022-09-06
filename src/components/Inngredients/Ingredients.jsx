import React from 'react';
import Product1 from "../../img/Product1.png";
import Product2 from "../../img/Product2.png";
import Product3 from "../../img/Product3.png";
import BSL from "../../img/BestSellerLogo.png";
import './Ingredients.css';

const Ingredients = () => {
    return (
        <section className='ingredients'>
            <div className='wrapper'>
                <div className='ingredients-conteiner__text'>
                    <h2 className='ingredients-conteiner__title'>
                        Made with natural ingredients, nothing fake
                    </h2>
                    <p className='ingredients-conteiner__subtitle'>
                        Shop All Flavors
                    </p>
                </div>
                <div className='ingredients-conteiner__cards'>
                    <div className='ingredients-conteiner__card'>
                        <img className='ingredients-conteiner__card-img' src={Product1} alt="Product1"/>
                        <p className='ingredients-conteiner__card-title'>
                            The Sampler Kit
                        </p>
                        <p className='ingredients-conteiner__card-description'>
                            Try a variety of Haus flavors with our customizable four-bottle kit. Each bottle serves 2-3 drinks.
                        </p>
                        <a href="#" className='ingredients-conteiner__card-button'>Shop Now</a>
                    </div>
                    <div className='ingredients-conteiner__card'>
                        <img className='ingredients-conteiner__card-img' src={Product2} alt="Product2"/>
                        <p className='ingredients-conteiner__card-title'>
                            Grapefruit Jalapeño
                        </p>
                        <p className='ingredients-conteiner__card-description'>
                            Light and refreshing, this aperitif is a bright blend of citrus with a subtle kick of fresh jalapeño.
                        </p>
                        <img className='ingredients-conteiner__card-bslimg' src={BSL} alt="bsl" />
                        <a href="#" className='ingredients-conteiner__card-button'>Shop Now</a>
                    </div>
                    <div className='ingredients-conteiner__card'>
                        <img className='ingredients-conteiner__card-img' src={Product3} alt="Product3"/>
                        <p className='ingredients-conteiner__card-title'>
                            Citrus Flower
                        </p>
                        <p className='ingredients-conteiner__card-description'>
                            A fresh Californian take on the apéritif. Made with crisp lemon and subtle elderflower.
                        </p>
                        <img className='ingredients-conteiner__card-bslimg' src={BSL} alt="bsl" />
                        <a href="#" className='ingredients-conteiner__card-button'>Shop Now</a>
                    </div>
                </div>
            </div>           
        </section>
    );
};

export default Ingredients;