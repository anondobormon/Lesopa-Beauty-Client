import React from 'react';
import './Home.css'
import Header from './Header/Header';

import Services from './Services/Services/Services';
import Team from './Team/Team';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <div className="home">
                <Services></Services>
                <Team></Team>
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;