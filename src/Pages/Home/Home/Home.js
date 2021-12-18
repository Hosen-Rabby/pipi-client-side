import React from 'react';
import Items from '../../Items/Items';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import Varities from '../Varities/Varities';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>     
            <Banner />
            <Varities />
            <Items />
        </div>
    );
};

export default Home;