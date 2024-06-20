"use client";
// import React from "react";
// import { SparklesCore } from "../Effects/Sparkles";
import Carousel from "./Carousel";
import {ImgData} from "./ImgData";


function HighlightsSection() {
    return (
        <section id="highlights-section" className="relative w-full h-[100vh]">
           
            <div id="carousel-heading" className="w-fit relative z-10  left-20 top-20">
                <h1 className="font-space text-5xl text-white">Highlights</h1>
            </div>
            <div id="carousel-content" className="relative z-10 left-1/4 top-32 h-[65%] w-[50%] max-h-96 text-white">
                <Carousel images={ImgData}/>
            </div>

        </section>
    );
}


export default HighlightsSection;
