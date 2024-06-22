"use client";
// import React from "react";
// import { SparklesCore } from "../Effects/Sparkles";
import Carousel from "./Carousel";
import {ImgData} from "./ImgData";


function HighlightsSection() {
    return (
        <section id="highlights-section" className="relative w-[55%] h-[100vh]">
           
            <div id="carousel-heading" className="w-fit relative z-10  left-[39%] top-20">
                <h1 className="font-space text-5xl text-white">Highlights</h1>
            </div>
            <div id="carousel-content" className="relative z-10 left-[20%] top-32 h-[45%] w-[65%]  text-white rounded-md">
                <Carousel images={ImgData}/>
            </div>

        </section>
    );
}


export default HighlightsSection;
