import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Views from './Views';
import css from '../../Style/style.css';

const ViewReview = () => {
    const [views, setViews] = useState([])
    useEffect(() => {
        const url = 'https://secure-temple-89823.herokuapp.com/reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => setViews(data))

    }, [])

    return (
        <div className='view_Review'>
            <Container>
                <Row>
                    <h2>What Our Client </h2>
                </Row>
                <Row>
                    {
                        views.slice(0, 6).map(view => <Views
                            key={view._id}
                            view={view}
                        ></Views>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ViewReview;