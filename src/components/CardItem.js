import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button} from "./Button";
import Aos from 'aos';
import "aos/dist/aos.css";

function CardItem(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    return (
        <>
            <li data-aos="fade-up" className='cards__item'>
                <a className='cards__item__link' href={props.path} style={{ textDecoration: 'none' }}>
                    <div className='cards__item__title'>
                        <h5 className='cards__title__text'>{props.title}</h5>
                    </div>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="cards__item__img"
                                    src={props.src1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="cards__item__img"
                                    src={props.src2}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="cards__item__img"
                                    src={props.src3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                    <div className='cards__item__btn'>
                        <Button
                            className='btns'
                            buttonStyle='btn--project'
                            buttonSize='btn--small'
                            onClick={() => window.open(props.path)}
                        >
                            LEARN MORE
                        </Button>
                    </div>
                </a>
            </li>
        </>
    );
}

export default CardItem;