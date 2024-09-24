import React from 'react';
import Navbar from '../components/Navbar';
import CinePrime from '../components/CinePrime';
import Footer from '../components/Footer';

function Cineprimes() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <CinePrime />
            </div>
            <Footer />
        </>
    )
}

export default Cineprimes