import React from 'react';
import '../App.css';
import { Button } from './Button';
import './FrontPage.css';
import Scroll, {animateScroll as scroll} from 'react-scroll'

function FrontPage() {
    return (
        <div className='hero-container'>
            <img className='img-title' src='/images/background.jpg' autoPlay loop muted />
            <h1>WELCOME</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={() => scroll.scrollMore(800)}
                >
                    CHECK MY PROJECT
                </Button>
            </div>
        </div>
    );
}

export default FrontPage;