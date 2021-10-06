import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Image9 from "../images/img-9.jpg";
import Image2 from "../images/img-2.jpg";
import Image8 from "../images/img-8.jpg";
import Image3 from "../images/img-3.jpg";
import Image4 from "../images/img-4.jpg";

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our Courses!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={Image9}
                            text='Explore de hidden waterfall inside the deep Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={Image2}
                            text='Travel though the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={Image8}
                            text='Feel the sand and the wind of Sahara Desert'
                            label='Explore'
                            path='/services'
                        />
                        <CardItem
                            src={Image3}
                            text='Set the sails of you boat and your life in the Atlantic Ocean'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={Image4}
                            text='Experience Football on the Top of Mountain'
                            label='Sports'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
