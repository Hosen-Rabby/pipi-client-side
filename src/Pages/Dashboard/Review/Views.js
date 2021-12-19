import React from 'react';
import { Col } from 'react-bootstrap';

const Views = (props) => {
    console.log(props)
    const { name, date, subject, thought } = props.view
    return (
        // <div>
            <Col lg={4}>
                <h4>{name}</h4><span>{date}</span>
                <h6>{thought}</h6>
            </Col>
        // </div>
    );
};

export default Views;