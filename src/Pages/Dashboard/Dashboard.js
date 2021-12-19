import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Review from './Review/Review';
import css from '../Style/style.css';
import Admin from './Admin/Admin';
import AllOrders from './AllOrders/AllOrders';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DashHome from './DashHome/DashHome';

const Dashboard = () => {
    return (
        <div className = 'dashboard'>
            <div className='space'></div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='dash'>
                            <Link to='/dashboard/review'>Review</Link>
                        </div>
                        {/* <DashHome /> */}
                    </Col>
                    <Col lg={9}>
                        <Routes>
                            <Route path="dashboard" element={<Dashboard />}>
                                <Route path='admin' element={<Admin />}></Route>
                                <Route path='review' element={<Review />}></Route>
                            </Route>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;