import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import css from '../Style/style.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const uri = 'http://localhost:5000/items'
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
                    items.slice(0, 6).map(product => <Item
                        key={product._id}
                        product={product}
                    ></Item>)
                }
            </Row>
        </Container>
    );
};

export default Items;