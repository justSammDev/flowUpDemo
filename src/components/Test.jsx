import React, { useState, useEffect, useRef } from "react";

const Test = () => {
  return (
    <div className="container m-auto flex items-center justify-center">
      <div className="grid grid-cols-3 justify-around items-center border-2 border-black w-screen h-[500px]">
        <div className="w-[200px] h-[200px] border-2 border-black"></div>
        <div className="w-[200px] h-[200px] border-2 border-black"></div>
        <div className="w-[200px] h-[200px] border-2 border-black"></div>
      </div>
    </div>
  );
};

export default Test;
