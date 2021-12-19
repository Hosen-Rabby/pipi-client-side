import React from 'react';
import { Col } from 'react-bootstrap';

const Views = (props) => {
    console.log(props)
    const { name, date, subject, thought } = props.view
    return (
        // <div>
        <>
            <h2></h2>
            <Col lg={4}>
                <div className='review_p'>

                    <h4>{name}</h4><span>{date}</span>
                    <h6>{thought}</h6>
                </div>
            </Col>
        </>
        // </div>
    );
};

export default Views;