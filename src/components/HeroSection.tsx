import "./HeroSection.css";

function HeroSection() {
    return (
        <section id="hero-section" className="text-left text-white absolute bottom-48 left-20 w-1/2">
            <div id="wrapper" >
                <h1 id="hero-title" className=" fadeInSlideUp-fast  text-4xl">Indian Space Research Organization</h1>
                <h2 id="hero-descrip" className=" fadeInSlideUp-medium  text-2xl mt-4 font-space-mono">Government of India</h2>
            </div>

            <button id="learn-more-btn"  className="fadeInSlideUp-slow  mt-4  p-4 border-2 font-space-mono">Learn More</button>
        </section>
    );
}

export default HeroSection;