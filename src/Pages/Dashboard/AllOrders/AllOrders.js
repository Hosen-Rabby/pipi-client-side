import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AllOrders = () => {
    const [orders, setOrders] =useState([]);
    const {name} = orders;

    console.log(orders)
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <div className='all_orders'>
            <Container>
                <Row>
                    {
                        orders.map(order =>
                            <Col>
                            <h4>Name: {order.name}</h4>
                            <h5>Price: {order.price}</h5>
                            <h6>SKU: {order.sku}</h6>
                            <p>Ordered by: {order.email}</p>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllOrders;