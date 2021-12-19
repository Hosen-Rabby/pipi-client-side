import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Review from './Review/Review';
import css from '../Style/style.css';
import Admin from './Admin/Admin';
import AllOrders from './AllOrders/AllOrders';
import { Outlet, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DashHome from './DashHome/DashHome';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user, admin } = useAuth();
    return (
        <div className='dashboard'>
            <div className='space'></div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='dash'>
                            <Link to='/dashboard'><Button>Dashboard</Button></Link>
                            <Link to='/dashboard/review'><Button>Review</Button></Link>
                            <Link to='/dashboard/myorder'><Button>My Order</Button></Link>
                            {
                                admin &&
                                <div>
                                    <Link to='/dashboard/admin'><Button>Make Admin</Button></Link>
                                    <Link to='/dashboard/allorders'><Button>Manage Order</Button></Link>
                                </div>
                            }
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;