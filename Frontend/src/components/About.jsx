import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const scrollToContact = () => {
        navigate('/contact');  // Navigate to the contact section in the homepage
    };

    return (
        <div className="max-w-screen-lg mx-auto my-12 px-4 md:px-8">
            <h1 className="text-4xl font-bold mb-6 text-center mt-16">
                About {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">CineZone</span></h1>
            <p className="text-md mb-4 text-center">
                Welcome to CineZone - your go-to platform for exploring films, finding recommendations, and watching movies for free!
                Whether you're a film enthusiast or just want to watch something new, CineZone offers a variety of features to enhance
                your movie-watching experience.
            </p>

            <h2 className="text-2xl font-semibold mb-3 text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-red-500 to-yellow-300">What CineZone Provides</h2>
            <ul className="list-disc list-inside mb-4 text-pretty mt-8">
                <li className="mb-2"><strong>Free Films:</strong> Explore a wide selection of films available for free viewing, without any subscription or registration.</li>
                <li className="mb-2"><strong>Film Recommendations:</strong> Get personalized recommendations based on your preferences and viewing history.</li>
                <li className="mb-2"><strong>Genres and Categories:</strong> Browse films by different genres such as action, romance, thriller, documentary, and more.</li>
                <li className="mb-2"><strong>Watchlist Feature:</strong> Create your own watchlist to keep track of films you'd like to watch later.</li>
                <li className="mb-2"><strong>Responsive Design:</strong> Access CineZone on any device – mobile, tablet, or desktop – for a seamless experience.</li>
                <li className="mb-2"><strong>Community Feedback:</strong> Share your reviews and feedback on films, and see what others have to say.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-red-500 to-yellow-300">Key Features</h2>
            <ul className="list-disc list-inside mb-4 text-pretty mt-8">
                <li className="mb-2"><strong>Streamlined User Experience:</strong> Intuitive navigation to make discovering and watching films easy and enjoyable.</li>
                <li className="mb-2"><strong>High-Quality Streaming:</strong> Enjoy films in HD and 4K quality, ensuring the best viewing experience.</li>
                <li className="mb-2"><strong>Regular Updates:</strong> Our film library is constantly growing, with new films added every week.</li>
                <li className="mb-2"><strong>Ad-Free Viewing:</strong> Enjoy an uninterrupted viewing experience without any ads.</li>
                <li className="mb-2"><strong>Secure Platform:</strong> All your data and activities are safe and protected on CineZone.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-red-500 to-yellow-300">Why Choose CineZone?</h2>
            <p className="text-md mb-4 text-pretty mt-8">
                CineZone is more than just a film-streaming website - it's a hub for movie lovers! With features like personalized recommendations,
                a vast library of films, and a clean, ad-free experience, we aim to provide an immersive and hassle-free platform. Whether you're
                looking for something to watch on a quiet night or want to explore films from different genres, CineZone has got you covered.
            </p>

            <div className="text-center mt-8">
                <button
                    className="bg-gradient-to-r from-violet-700 via-red-500 to-yellow-300 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={scrollToContact}>
                    Contact Us 📩
                </button>
            </div>
        </div>
    );
};

export default About;