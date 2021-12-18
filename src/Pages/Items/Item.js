import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from '../Style/style.css';

const Item = (props) => {
    console.log(props);
    const { _id, name, img, desc, price } = props.product;

    return (
        <Col lg={3} md={4} sm={6} xs={6}>
            <div className='item'>
                <div className='item_img'>
                    <img src={img} className='img-fluid' />
                </div>
                <div className="item_info">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <h5>${price}</h5>
                    <Link to={`/items/${_id}`}>
                        <button className="btn item_btn">View Options</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Item;