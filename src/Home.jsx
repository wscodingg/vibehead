import React from "react";
import './Background.css';
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import Radios from "./components/Radios";

function Home(){
    return(
        <>
            <div className="one">
                <Topbar />
                <Radios />
                <Bottombar />
            </div>
        </>
    )
}

export default Home