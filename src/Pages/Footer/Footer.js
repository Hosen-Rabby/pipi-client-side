import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from '../Style/style.css';

const Footer = () => {

    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='footer_item'>
                            <Link to='/' className='logo'>
                                Pipi
                            </Link>
                            <p>212 Asad Avenue, MuriPara</p>
                            <p>Bangladesh, Dhaka-1207</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='footer_c'>
                            <h3>Hot Menu</h3>
                            <h6>Burger Kingo</h6>
                            <h6>Pizza Kingo</h6>
                            <h6>Chocolate Donuts</h6>
                            <h6>Chicken Sandwich Donuts</h6>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='footer_c'>
                            <h3>Opening Hours</h3>
                            <h6>Monday: 10 AM - 5PM</h6>
                            <h6>Tuesday: 11 AM - 6PM</h6>
                            <h6>Wednesday: 10 AM - 5PM</h6>
                            <h6>Friday: Close</h6>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
};

export default Footer;