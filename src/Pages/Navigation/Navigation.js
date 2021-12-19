import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from '../Style/style.css';
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {

    const { user, logOutUser } = useAuth();

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
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">

                            {
                                user?.email ?
                                    <NavDropdown title={user.email} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="">
                                            <>
                                                <Button onClick={handleLogOut}>Logout</Button>
                                                <br></br>
                                                <Link to='/order'>
                                                    <Button>My Orders</Button>
                                                </Link>
                                                <Link to='/dashboard'>
                                                    <Button>Dashboard</Button>
                                                </Link>
                                            </>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    :
                                    <Link to='/login'>
                                        <Button>Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;