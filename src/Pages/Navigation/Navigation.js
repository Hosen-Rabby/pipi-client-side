import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from '../Style/style.css';
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {

    const { user, logOutUser } = useAuth();
    const [dashUser, setDashUser] = useState([]);
    console.log(dashUser);


    useEffect(() => {
        fetch(`https://secure-temple-89823.herokuapp.com/dashusers/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setDashUser(data))
    }, []);
    const handleLogOut = e => {
        logOutUser();
    }



    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Pipi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" text="white">
                            {/* <Link to=''></Link> */}
                            <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                            {/* <Nav.Link as={HashLink} to="/#varities">Vsrities</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#all">All Items</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#review">Reviews</Nav.Link> */}
                        </Nav>

                        <Nav className="ms-auto">

                            {
                                user?.email ?

                                    < NavDropdown title={user.email} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="">
                                            <>
                                                <button className='uni_btn' onClick={handleLogOut}>Logout</button >
                                                <br></br>
                                                <Link to='/order'>
                                                    <button className='uni_btn'>My Orders</button >
                                                </Link>
                                                <Link to='/dashboard'>
                                                    <button className='uni_btn'>Dashboard</button >
                                                </Link>
                                            </>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    :
                                    <Link to='/login'>
                                        <button className='uni_btn'>Login</button >
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Navigation;