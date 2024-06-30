"use client";
// import React from "react";
// import { SparklesCore } from "../Effects/Sparkles";
import Carousel from "./Carousel";
import {ImgData} from "./ImgData";


function HighlightsSection({isSmall} : {isSmall: boolean}) {
    return (
        <section id="highlights-section" className={`${isSmall  ? "w-full flex flex-col items-center h-fit"  : "relative w-[55%] h-[50vh]"}`}>
           
            <div id="carousel-heading" className={`${isSmall  ? "mt-10"  : "w-fit relative z-10  left-[39%] top-12"}`}>
                <h1 className="font-space text-5xl text-white">Highlights</h1>
            </div>
            <div id="carousel-content" className={`${isSmall  ? "h-[50vh] w-[70vw] mt-10"  : "relative z-10 left-[20%] top-24 h-[35vh] w-[65%]"}  text-white rounded-md`}>
                <Carousel images={ImgData}/>
            </div>

        </section>
    );
}


export default HighlightsSection;
