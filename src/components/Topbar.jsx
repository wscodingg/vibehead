import React, { useState } from "react";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";

function Topbar(){

    const [showpomodaro, setshowpomodaro] = useState(false);

    const togglePomodaro = () => {
        setshowpomodaro(!showpomodaro);
    }

    return(
        <>
            <div className="flex items-center justify-center pt-5 relative">

                <input type="text" placeholder="What do you want to play" className="border border-white rounded-3xl md:w-[30vw] py-2 focus:bg-slate-800 focus:outline-0 text-white px-5 hover:cursor-pointer ml-auto"/>
                
                <div className="icons flex gap-4 ml-auto mr-10 items-center">
                    <a href="https://github.com/wscodingg" target="_blank">
                        <LuGithub className="size-6 text-white cursor-pointer"/>
                    </a>
                    <a href="https://x.com/wscoding" target="_blank">
                        <RiTwitterXLine className="size-6 text-white cursor-pointer"/>
                    </a>
                    <GoClock onClick={togglePomodaro} className="size-6 text-white cursor-pointer"/>
                </div>
            </div>

            {showpomodaro && <Pomodaro />}

        </>
    )
}


function Pomodaro() {
    return(
        <>
            <p>nothin yet</p>
        </>
    )
}

export default Topbar
