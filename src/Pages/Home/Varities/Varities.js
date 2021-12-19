import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import var1 from '../../../img/var1.png';
import pepsi from '../../../img/pepsi.png';
import fre from '../../../img/french.jpg';


const Varities = () => {
    return (
        <>
            <div className='varities' id='varities'>
                <Container>
                    <Row>
                        <Col lg={4} sm={6}>
                            <div className='var_item'>
                                <div className='item_text'>
                                    <h3>Maxican Pizza</h3>
                                </div>
                                <div className='item_img'>
                                    <img
                                        src={var1}
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className='var_item'>
                                <div className='item_text'>
                                    <h3>Soft Drinks</h3>
                                </div>
                                <div className='item_img'>
                                    <img
                                        src={pepsi}
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className='var_item'>
                                <div className='item_text'>
                                    <h3>French Fries</h3>
                                </div>
                                <div className='item_img'>
                                    <img
                                        src={fre}
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Varities;