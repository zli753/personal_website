import React from 'react';
import Image from 'react-bootstrap/Image'
import '../../App.css';
import {Spring} from "react-spring/renderprops-universal";

function Resume() {
    return (
        <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:800, duration: 800}}
        >
            {props=>(
                <div style={props}>
                    <div>
                        <Image src='images/CV.png' fluid />
                    </div>
                </div>
                )}
        </Spring>
    );
}

export default Resume;