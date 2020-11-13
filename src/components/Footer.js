import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Footer() {
    const history = useHistory();
    return (
        <div className='footer-container'>
            <Link  onClick={()=>history.push('/')}>
                <h5 className='footer-link'>Eric Li</h5>
                <h5 className='footer-year'>@2020</h5>
            </Link>
        </div>
    );
}

export default Footer;

