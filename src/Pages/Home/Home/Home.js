import React from 'react';
import Items from '../../Items/Items';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import Varities from '../Varities/Varities';
import Footer from '../../Footer/Footer';
import ViewReview from '../../Dashboard/Review/ViewReview';

const Home = () => {
    return (
        <div>     
            <Banner />
            <Varities />
            <Items />
            <ViewReview />
        </div>
    );
};

export default Home;