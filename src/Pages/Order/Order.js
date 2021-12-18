import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from '../Style/style.css';
import CheckOut from './CheckOut';


const stripePromise = loadStripe('pk_test_51K7ynJGlpPduiwahpmSEfgFnDj8f7sAeC5lMt5lHwbhZ0eYAcxQ2bCUu8bXCmlV84YLKm5qXyDIJkVeGmq1p6ejQ00Y9di8G9M')



const Order = () => {
    const { user } = useAuth()

    const [orderItems, setOrderItems] = useState([]);
    const count = orderItems.length;

    // pay item
    const [payItem, setPayItem] = useState([]);
    console.log(payItem);

    // const(name, desc, price) = payItem;
    const { name, desc, price } = payItem;
    console.log(name);


    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrderItems(data))
    }, []);


    // delete

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you really want to remove this item!');

        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;

            fetch(url, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                        const remainingUsers = orderItems.filter(item => item._id !== id);
                        setOrderItems(remainingUsers);
                    }

                });
        }
    }

    // pay item

    const handlePay = (id) => {
        const url = `http://localhost:5000/orders/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPayItem(data))
    }

    let tCost = 0;

    const cost = orderItems.map(i => i.price)
    for (var i = 0; i < cost.length; i++) {
        console.log(cost[i]);
        let sCost = parseInt(cost[i])
        tCost = sCost + tCost;
    }

    console.log(tCost);


    // payment

    const [payData, setPayData] = useState({});


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPayData = { ...payData };
        newPayData[field] = value;
        setPayData(newPayData);
        console.log(payData);
    }




    return (
        <Container>
            <div className='space'></div>
            <Row>
                <Col lg={7}>
                    <h2>Order Summary</h2>


                    {
                        orderItems.map(order =>
                            <div className='order_items'>
                                <div className='item_img'>
                                    <img src={order.img} width='140px' />
                                </div>
                                <div className='item_info'>
                                    <h5>{order.name}</h5>
                                    <h6>{order.desc}</h6>
                                    <p>Price: ${order.price}</p>
                                    <Button onClick={() => handleDelete(order._id)}>Remove</Button>
                                    <Button onClick={() => handlePay(order._id)}>Pay</Button>
                                </div>

                            </div>
                        )

                    }
                </Col>

                <Col lg={5}>
                    <div className='payment'>

                        
                        {/* <p>Total items : {count}</p>
                        <h5>Total Cost :${tCost}</h5> */}

                        {
                            payItem.price &&
                            <>
                            <h3>Payment Details</h3>

                        <div className='pay_for'>
                            <h4>Pay for: {name}</h4>
                            <h3>Price: {price}</h3>
                        </div>
                        </>
                        }

                        <div className='payment_details'>
                            {/* <form>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" name="name" placeholder="" onChange={handleOnChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="number" name="name" placeholder="" onChange={handleOnChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Expiration</Form.Label>
                                    <Form.Control type="number" name="name" placeholder="" onChange={handleOnChange} />
                                </Form.Group>
                            </form> */}

                            {
                                payItem?.price &&
                                <Elements stripe={stripePromise}>
                                    <CheckOut
                                        payItem={payItem}
                                    />
                                </Elements>}
                        </div>
                    </div>
                </Col>


            </Row>
        </Container>
    );
};

export default Order;