import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import css from '../Style/style.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const uri = 'https://secure-temple-89823.herokuapp.com/items'
        fetch(uri)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Container id='items'>
            <Row>
                <Col lg={12}>
                    <div className='items_top'>
                        <h6>Fresh from Pipi</h6>
                        <p>We Offer People Best Way</p>
                        <p>To Eat Best Food</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    items.map(product => <Item
                        key={product._id}
                        product={product}
                    ></Item>)
                }
            </Row>
        </Container>
    );
};

export default Items;