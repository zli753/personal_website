import emailjs from "emailjs-com";
import React from 'react';
import '../../App.css';
import{ init } from 'emailjs-com';
import {Spring} from "react-spring/renderprops-universal";
init("user_gFCbcODG2ucrRrZwyfmTE");


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_0x3jhqs', 'template_z5xulnb', e.target, 'user_gFCbcODG2ucrRrZwyfmTE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:800, duration: 800}}
        >
            {props=>(
                <div style={props}>
                    <div>
                        <div className="container">
                            <form onSubmit={sendEmail}>
                                <div className="row pt-5 mx-auto">
                                    <div className="col-8 form-group mx-auto">
                                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                    </div>
                                    <div className="col-8 pt-3 mx-auto">
                                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                )}
        </Spring>


    )
}