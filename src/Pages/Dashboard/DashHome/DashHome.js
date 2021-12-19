import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashHome = () => {
    const [dashUser, setDashUser] = useState([]);
    const { user } = useAuth();
    console.log(dashUser);

   
    useEffect(() => {
        fetch(`https://secure-temple-89823.herokuapp.com/dashusers/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setDashUser(data))
    }, []);

    return (
        <div>
            {
                dashUser.map(order =>
                    <Col>
                        <h2>Hello {order.userName}, this is your dashboard.</h2>
                        <h4>Full Name: {order.name}</h4>
                        <p>Email: {order.email}</p>
                    </Col>
                )
            }
        </div>
    );
};

export default DashHome;