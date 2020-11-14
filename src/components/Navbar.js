import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Spring } from 'react-spring/renderprops';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    //the button will not show up after reloading the page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Spring
            from={{opacity:0, marginTop: -500}}
            to={{opacity:1, marginTop: 0}}
            config={{delay:500, duration: 500}}
        >
            {props=>(
                <div style={props} className='navbar'>

                        <nav>
                            <div className='navbar-container'>
                                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                                    ERIC LI
                                    <i class='fab fa-typo3' />
                                </Link>
                                <div className='menu-icon' onClick={handleClick}>
                                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                                </div>
                                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                    <li className='nav-item'>
                                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            to='/resume'
                                            className='nav-links'
                                            onClick={closeMobileMenu}
                                        >
                                            Resume
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to='/contact'
                                            className='nav-links-mobile'
                                            onClick={closeMobileMenu}
                                        >
                                            CONTACT
                                        </Link>
                                    </li>
                                </ul>
                                {button && <Button buttonStyle='btn--outline' to='/contact'>CONTACT</Button>}
                            </div>
                        </nav>

                </div>
            )}
        </Spring>

    );
}

export default Navbar;