import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {Spring} from "react-spring/renderprops-universal";

function Footer() {
    const history = useHistory();
    return (
        <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:1500, duration: 1500}}
        >
            {props=>(
                <div style={props}>
                    <div className='footer-container'>
                        <Link  onClick={()=>history.push('/')}>
                            <h5 className='footer-link'>Eric Li</h5>
                            <h5 className='footer-year'>@2020</h5>
                        </Link>
                    </div>
                </div>
                )}
        </Spring>

    );
}

export default Footer;

