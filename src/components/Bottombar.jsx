import React, { useEffect, useState } from "react";

function Bottombar() {
  return (
    <> 
      <div className="flex noto-sans text-white bottom-10 absolute w-[90%] left-0 right-0 mx-auto">
        <div className="text-xl">
          <p className="font-semibold">Now Playing: <span className="font-light">Synthwave LofiGirl</span></p>
          <p className="my-2 text-3xl font-semibold">10:45 am</p>
          <p className="font-light">Time to lockin Champ</p>
        </div>
        

        <div className="ml-auto">
          <div className="flex gap-5">
            <button className="py-1 border px-5 cursor-pointer hover:bg-white hover:text-black active:scale-95">Play</button>
            <button className="py-1 border px-4 cursor-pointer bg-red-600 active:scale-95">Pause</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bottombar;
