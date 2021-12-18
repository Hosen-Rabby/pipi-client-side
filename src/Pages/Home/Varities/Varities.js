import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import var1 from '../../../img/var1.png';


const Varities = () => {
    return (
        <>
            <div className='varities'>
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
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Varities;