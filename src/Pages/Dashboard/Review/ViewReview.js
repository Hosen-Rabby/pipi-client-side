import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Views from './Views';

const ViewReview = () => {
    const [views, setViews] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => setViews(data))

    }, [])

    return (
        <div className='view_Review'>
            <Container>
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