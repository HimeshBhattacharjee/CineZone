import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FreeFilms from '../components/FreeFilms';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <FreeFilms />
            <Footer />
        </>
    );
}

export default Home;