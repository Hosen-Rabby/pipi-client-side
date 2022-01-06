import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { name } = orders;

    console.log(orders)
    useEffect(() => {
        fetch('https://secure-temple-89823.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <div className='all_orders'>
            <Container>
                <Row>
                    {
                        orders.map(order =>
                            <Col lg={4}>
                                <img src={order.img} className='img-fluid'/>
                                <p>Name: {order.name}</p>
                                <p>Price: ${order.price}</p>
                                <p>SKU: {order.sku}</p>
                                <h6>Ordered by: {order.email}</h6>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllOrders;