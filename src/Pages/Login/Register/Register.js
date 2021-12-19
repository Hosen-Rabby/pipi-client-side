import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import css from '../../Style/style.css';
import reg from '../../../img/register.jpg';

const Register = () => {
    const { user, registerUser, loading, authError } = useAuth();
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

    const submitRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert('Please set both password same.')
        }
        registerUser(loginData.email, loginData.password, loginData.name, loginData.username, location, navigate)
        // loginData = '';
        e.preventDefault();

        const name = loginData.name;
        const userName = loginData.username;
        const email = loginData.email;
        const password = loginData.password;
        const password2 = loginData.password2;

        const user = { name, userName, email, password, password2 };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Succesfully registerd')
                    e.target.reset();
                }
            })
    }

    // 

    return (

        <div className='register' 
        style={{ 
            backgroundImage: `url(${reg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className='reg_left'>
                            {/* <h2>Left</h2> */}
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='reg_right'>
                            <div className='reg_text'>
                                <h3>Create new account</h3>
                                {/* <Link to='/'>Google</Link>
                                <Link to='/'>Facebook</Link>
                                <h5>----- Or ------</h5> */}
                            </div>
                            <form onSubmit={submitRegister} method=''>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" name="name" placeholder="" onChange={handleOnChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="userName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="name" name="username" placeholder="" onChange={handleOnChange} />
                                </Form.Group>
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
                                    <p>Logout to create a new user.</p>
                                    </>
                                    :
                                    <Button type='submit'>Submit</Button>
                                }


                            </form>

                            {/* {user?.email && <h2>User created</h2>} */}
                            {authError && <h3>{authError}</h3>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;