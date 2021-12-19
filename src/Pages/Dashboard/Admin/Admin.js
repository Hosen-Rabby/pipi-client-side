import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import css from '../../Style/style.css';

const Admin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token, loading } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault()

        const user = { email };
        fetch('https://secure-temple-89823.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })
        // loading();

        e.preventDefault()
    }
    return (
        <div className='admin'>
            <Container>
                <Row>
                    <Col>
                        <div className='space'></div>
                        <Form onSubmit={handleAdminSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" onBlur={handleOnBlur} name='email' placeholder="Enter email" className='admin_inp' required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='post'>
                                Make Admin
                            </Button>
                        </Form>
                        {success && <h6>Succesfully made an admin</h6>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;