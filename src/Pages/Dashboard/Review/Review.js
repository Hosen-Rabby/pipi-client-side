import React, { useState } from 'react';
import { button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Review = () => {

    const { user } = useAuth();
    const [review, setReview] = useState({})

    // console.log(email)
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newreview = { ...review };
        newreview[field] = value;
        setReview(newreview);
        console.log(review);
    }

    const submitReview = e => {
        e.preventDefault();

        const name = review.name;
        const subject = review.subject;
        const thought = review.thought;
        const email = user.email;
        const getdate = new Date();
        const date = getdate.toDateString();

        const reviewAdd = { name, subject, email, thought, date };
        fetch('https://secure-temple-89823.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewAdd)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Succesfully Reviewd.')
                    e.target.reset();
                }
            })

    }


    return (
        <div className='review'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <h3>Review about services.</h3>
                        <form onSubmit={submitReview}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name="name" placeholder="" onChange={handleOnChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="subject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" name="subject" placeholder="Optional" onChange={handleOnChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="userName">
                                <Form.Label>Write your thoughts</Form.Label>
                                <textarea onChange={handleOnChange} class="form-control" id="exampleFormControlTextarea1" rows="3" name="thought" required></textarea>
                            </Form.Group>
                            <button className='uni_btn' className='uni_btn' type='submit'>Post Review</button>


                        </form>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Review;