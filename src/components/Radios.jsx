import React, { useEffect, useRef } from "react";

function Radios() {
    

    return (
        <>
            <div className="">
                <iframe
                    id="radio-1"
                    width="400"
                    height="200"
                    src="https://www.youtube.com/embed/4xDzrJKXOOY?si=XvrpW8hXDDEd1mYn&amp;controls=0&autoplay=1&mute=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}

export default Radios;