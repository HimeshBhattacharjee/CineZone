import React, { useState, useEffect } from 'react';
import video1 from "../../../Videos/video.mp4";

const videoSources = [
    { src: video1 },
];

const movieDialogues = [
    { dialogue: "May the Force be with you.", movie: "Star Wars", year: 1977 },
    { dialogue: "Here's looking at you, kid.", movie: "Casablanca", year: 1942 },
    { dialogue: "You can't handle the truth!", movie: "A Few Good Men", year: 1992 },
    { dialogue: "To infinity and beyond!", movie: "Toy Story", year: 1995 },
    { dialogue: "Just keep swimming.", movie: "Finding Nemo", year: 2003 },
    { dialogue: "Why so serious?", movie: "The Dark Knight", year: 2008 },
    { dialogue: "I am Iron Man.", movie: "Iron Man", year: 2008 },
    { dialogue: "I wish I knew how to quit you.", movie: "Brokeback Mountain", year: 2005 },
    { dialogue: "I'm always angry.", movie: "The Avengers", year: 2012 },
    { dialogue: "This is the way.", movie: "The Mandalorian", year: 2019 },
    { dialogue: "We are Groot.", movie: "Guardians of the Galaxy", year: 2014 },
    { dialogue: "I live my life a quarter mile at a time.", movie: "The Fast and the Furious", year: 2001 },
    { dialogue: "Wakanda forever!", movie: "Black Panther", year: 2018 },
    { dialogue: "Do you want to build a snowman?", movie: "Frozen", year: 2013 },
    { dialogue: "Because I'm Batman!", movie: "The Dark Knight Rises", year: 2012 },
    { dialogue: "I am inevitable.", movie: "Avengers: Endgame", year: 2019 },
    { dialogue: "I volunteer as tribute!", movie: "The Hunger Games", year: 2012 },
    { dialogue: "This is Sparta!", movie: "300", year: 2006 },
    { dialogue: "You shall not pass!", movie: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { dialogue: "You know nothing, Jon Snow.", movie: "Game of Thrones", year: 2011 },
    { dialogue: "Language!", movie: "Avengers: Age of Ultron", year: 2015 },
    { dialogue: "This is the way.", movie: "The Mandalorian", year: 2019 },
];

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [typedDialogue, setTypedDialogue] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    const scrollToSection = () => {
        const section = document.getElementById('freefilms');
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // Typewriter effect
    useEffect(() => {
        const { dialogue } = movieDialogues[currentDialogueIndex];
        if (charIndex < dialogue.length) {
            const typingTimeout = setTimeout(() => {
                setTypedDialogue((prev) => prev + dialogue[charIndex]);
                setCharIndex(charIndex + 1);
            }, 100); // Typing speed

            return () => clearTimeout(typingTimeout);
        } else {
            setTimeout(() => {
                setIsTyping(false);
            }, 1000); // Pause before transitioning to the next dialogue
        }
    }, [charIndex, currentDialogueIndex]);

    // Reset typing state when a new dialogue is shown
    useEffect(() => {
        setTypedDialogue('');
        setCharIndex(0);
        setIsTyping(true);
    }, [currentDialogueIndex]);

    // Switch dialogues every 7 seconds
    useEffect(() => {
        const dialogueInterval = setInterval(() => {
            setCurrentDialogueIndex((prev) => (prev + 1) % movieDialogues.length);
        }, 7000); // Time between full dialogues

        return () => clearInterval(dialogueInterval);
    }, []);

    return (
        <div className="relative w-full h-screen max-w-screen-2xl mx-auto flex items-center justify-center bg-black">
            {videoSources.map((video, index) => (
                <video
                    key={index}
                    autoPlay
                    loop
                    muted={isMuted}
                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}

            <div className="relative z-10 text-center p-6 text-white">
                <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-red-600 to-yellow-600 font-bold mb-4">
                    CineZone: {' '}
                    <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300 font-bold">Where Stories Come Alive</span>
                </h1>
                <p className="text-xl mb-8">
                    Discover, stream, and enjoy—anytime, anywhere.
                </p>

                {/* Movie Dialogue with typing effect */}
                <div className="text-xl mb-2 font-bold">
                    <span className="italic text-yellow-400">"</span>
                    <span className={`animate-type ${isTyping ? 'typing' : 'fade-out'}`}>{typedDialogue}</span>
                    <span className="italic text-yellow-400">"</span>
                </div>

                {/* Movie Name and Year */}
                {!isTyping && (
                    <p className="text-lg italic text-gray-300 mb-6">
                        {`- ${movieDialogues[currentDialogueIndex].movie} (${movieDialogues[currentDialogueIndex].year})`}
                    </p>
                )}

                <button
                    onClick={scrollToSection}
                    className="px-6 py-3 text-black rounded-full shadow-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none hover:text-white border-2"
                    style={{
                        background: 'linear-gradient(to right, violet, red, yellow)',
                        borderImage: 'linear-gradient(to right, yellow, red, yellow) 1',
                        border: 'none',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden'
                    }}
                >
                    <span
                        className="relative z-10"
                        style={{
                            transition: 'color 0.1s ease-in-out'
                        }}
                    >
                        Get Started
                    </span>
                </button>
            </div>

            <div className="absolute bottom-8 right-8 z-20">
                <button
                    onClick={toggleMute}
                    className="bg-gradient-to-r from-red-500 to-yellow-300 text-white p-2 rounded-full shadow-lg hover:scale-110 focus:outline-none"
                >
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l11-7-11-7z" />
                            <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} x1="3" y1="3" x2="21" y2="21" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l11-7-11-7z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Banner;
