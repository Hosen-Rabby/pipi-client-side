import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import log from '../../../img/login.jpg';
import css from '../../Style/style.css';

const Login = () => {

    const { user, logInUser, loading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        // console.log(field);
        const value = e.target.value;
        // console.log(value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const submitLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('Type correct password')
        }
        logInUser(loginData.email, loginData.password, location, navigate )
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className='login'
            style={{
                backgroundImage: `url(${log})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className='log_left'>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='log_right'>
                            <div className='log_text'>
                                <h3>Login to Pipi</h3>
                                <h5>New user? <Link to='/register'>Register</Link></h5>
                            </div>
                            <form onSubmit={submitLogin} method=''>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="" onChange={handleOnChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="" onChange={handleOnChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password2">
                                    <Form.Label>Retype Password</Form.Label>
                                    <Form.Control type="password" name="password2" placeholder="" onChange={handleOnChange} />
                                </Form.Group>

                                {user?.email?
                                <>
                                    <Button type='submit' disabled>Submit</Button>
                                    <p>Log out to log in again</p>
                                    </>
                                    :
                                    <Button type='submit'>Submit</Button>
                                }
                            </form>

                            {/* {user?.email && <h2>Logged in successfully.</h2>} */}
                            {authError && <h3>{authError}</h3>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;