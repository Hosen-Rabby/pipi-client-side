import React from 'react';
import { button, Col, Container, Row } from 'react-bootstrap';
import Review from './Review/Review';
import css from '../Style/style.css';
import Admin from './Admin/Admin';
import AllOrders from './AllOrders/AllOrders';
import { Outlet, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DashHome from './DashHome/DashHome';
import useAuth from '../../hooks/useAuth';
import '../Style/style.css'

const Dashboard = () => {
    const { user, admin } = useAuth();
    return (
        <div className='dashboard'>
            <div className='space'></div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='dash'>
                            <Link to='/dashboard'><button className='dash_btn'>Dashboard</button></Link>
                            <Link to='/dashboard/review'><button className='dash_btn'>Review</button></Link>
                            <Link to='/dashboard/myorder'><button className='dash_btn'>My Order</button></Link>
                            {
                                admin &&
                                <div>
                                    <Link to='/dashboard/admin'><button className='dash_btn'>Make Admin</button></Link>
                                    <Link to='/dashboard/allorders'><button className='dash_btn'>Manage Order</button></Link>
                                </div>
                            }
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className='dash_right'>
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;