"use client";
// import React from "react";
import { SparklesCore } from "../Effects/Sparkles";

function HighlightsSection() {
    return (
        <section id="highlights-section relative">
            <div className="w-full h-full absolute">
                <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
                />
            </div>
            <div id="carousel-heading" className=" relative left-20">
                <h1 className="font-space text-5xl relative top-20">Highlights</h1>
            </div>
            <div id="carousel">
                
            </div>
        </section>
    );
}


export default HighlightsSection;
