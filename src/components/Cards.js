import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src1='images/internship_1.jpg'
                            src2='images/internship_2.jpg'
                            src3='images/internship_3.jpg'
                            text='Internship: Developing an admin panel, adding new feature like resetting password and showing current states. Building
reactJS component by using Bootstrap, CSS etc.'
                            label='React'
                            path='https://angel.co/company/stealthdpc'
                        />
                        <CardItem
                            src1='images/personal_1.jpg'
                            src2='images/personal_2.jpg'
                            src3='images/personal_3.jpg'
                            text='Personal website created by using ReactJs with support of Bootstrap and CSS. Different feature such as image carousel, react card, emailJS has been deployed in this project'
                            label='React'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src1='images/sedation_1.jpg'
                            src2='images/sedation_2.jpg'
                            src3='images/sedation_3.jpg'
                            text='Clinical decision support website on spring boot. HTML and CSS for frontend. Java for backend and object oriented design (multiple objects like patients, record, feedback etc.). MongoDB for database'
                            label='Java'
                            path='/products'
                        />
                        <CardItem
                            src1='images/crypto_1.png'
                            src2='images/crypto_2.png'
                            src3='images/crypto_3.png'
                            text='Android mobile application for a simple crypto game. Implemented different objects by using Java such as players, crytograms, solutions etc.
Used SQLite database to store information for each player.'
                            label='Android'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Cards;
