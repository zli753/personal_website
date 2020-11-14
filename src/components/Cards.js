import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Spring} from "react-spring/renderprops-universal";


function Cards() {
    return (
        <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:800, duration: 800}}
        >
            {props=>(
                <div style={props}>
                    <div className='cards'>
                        <h1>Check out my projects!</h1>
                        <div className='cards__container'>
                            <div className='cards__wrapper'>
                                <ul className='cards__items'>
                                    <CardItem
                                        src1='images/internship_1.png'
                                        src2='images/internship_2.png'
                                        src3='images/internship_3.png'
                                        text='Internship: Developing an admin panel, adding new feature like resetting password and showing current states. Building
reactJS component by using Bootstrap, CSS etc.'
                                        label='React'
                                        path='https://github.com/zli753/admin-panel'
                                        title='Admin Panel'
                                    />
                                    <CardItem
                                        src1='images/personal_1.png'
                                        src2='images/personal_2.png'
                                        src3='images/personal_3.png'
                                        text='Personal website created by using ReactJs with support of Bootstrap and CSS. Deployed on AWS. Different feature such as image carousel, react card, emailJS has been deployed in this project'
                                        label='React'
                                        path='https://github.com/zli753/personal_website'
                                        title='Personal Website'
                                    />
                                </ul>
                                <ul className='cards__items'>
                                    <CardItem
                                        src1='images/sedation_1.jpg'
                                        src2='images/sedation_2.jpg'
                                        src3='images/sedation_3.jpg'
                                        text='Clinical decision support website on spring boot. HTML and CSS for frontend. Java for backend and object oriented design (multiple objects like patients, record, feedback etc.). MongoDB for database'
                                        label='Java'
                                        path='https://github.com/zli753/Sedation-Assist-master'
                                        title='Sedas'
                                    />
                                    <CardItem
                                        src1='images/crypto_1.png'
                                        src2='images/crypto_2.png'
                                        src3='images/crypto_3.png'
                                        text='Android mobile application for a simple crypto game. Implemented different objects by using Java such as players, crytograms, solutions etc.
Used SQLite database to store information for each player.'
                                        label='Android'
                                        path='https://github.com/zli753/CryptoProject'
                                        title='Crypto Game'
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                )}
        </Spring>



    );
}

export default Cards;
