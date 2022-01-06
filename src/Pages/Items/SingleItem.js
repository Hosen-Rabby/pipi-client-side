import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from '../Style/style.css';


const SingleItem = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [items, setItems] = useState({});
    const email = user.email;
    const { name, details, price, sku, desc, img, img2, img3, img4 } = items;
    
    useEffect(() => {
        fetch(`https://secure-temple-89823.herokuapp.com/items/${id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    // order
    const orderAdd = { name, email, details, price, sku, desc, img, img2, img3, img4 };
    const submitOrder = e => {
        fetch('https://secure-temple-89823.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderAdd)
        })
    }


    return (
        <>
            <div className='space'>
            </div>
            <div className='single_item_banner'>

                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1>Shop Now</h1>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className='detail'>
                <Container>

                    <Row>
                        <Col lg={5} md={5} sm={5} className='detail_img'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt={name}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt={name}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3}
                                        alt={name}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4}
                                        alt={name}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col lg={7} md={7} sm={7}>
                            <div className='detail_info'>
                                <h3>{name}</h3>
                                <h4>${price}</h4>
                                <h5>SKU: {sku}</h5>
                                <p>{details}</p>
                                <Link to='/order' onClick={submitOrder}>
                                    <Button>Order Now</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default SingleItem;