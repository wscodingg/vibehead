import React from "react";
import vibecoder from '../assets/viber.jpg';
import './Animation.css';

function Animation() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen animation-container-hide">
                <div className="flex gap-10 text-center noto-sans font-bold items-center justify-center">
                    <img className="w-60 animate-from-left" src={vibecoder} alt="beared-guy-holding-mouse" />
                    <p className="text-2xl animate-from-right">Welcome to <span className="text-green-400">VibeHead</span> </p>
                </div>
            </div>
        </>
    );
}

export default Animation;