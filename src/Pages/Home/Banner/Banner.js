import React from 'react';
import { Carousel } from 'react-bootstrap';
import css from '../../Style/style.css';
import pizza from '../../../img/pizza.jpg';
import slide from '../../../img/slide.jpg';
import slide2 from '../../../img/slide01-1.png';


const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block img-fluid slide_img"
                        src={pizza}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block img-fluid slide_img"
                        src={slide}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block img-fluid slide_img"
                        src={slide2}
                        alt="First slide"
                    />
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Banner;