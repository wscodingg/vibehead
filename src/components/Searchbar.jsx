import React from "react";
import { RiMenuSearchLine } from "react-icons/ri";

function Searchbar(){
    return(
        <>
            <div className="flex items-center justify-center pt-5 relative">

                <input type="text" placeholder="What do you want to play" className="border border-white rounded-3xl md:w-[30vw] py-2 focus:bg-slate-800 focus:outline-0 text-white px-5 hover:cursor-pointer"/>
                
            </div>
        </>
    )
}

export default Searchbar