import "./HeroSection.css";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="text-left text-white absolute bottom-48 left-20 w-1/2"
    >
      <div id="wrapper">
        <h1
          id="hero-title"
          className=" fadeInSlideUp-fast drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-4xl text-isro-orange"
        >
          Indian Space Research Organization
        </h1>
        <h2
          id="hero-descrip"
          className=" fadeInSlideUp-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl mt-4 font-space-mono text-isro-blue"
        >
          Government of India
        </h2>
      </div>

      <button
        id="learn-more-btn"
        className="fadeInSlideUp-slow drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4 text-isro-orange border-isro-blue p-4 border-2 font-space-mono"
      >
        <a href="https://www.isro.gov.in/" target="_blank">
          Learn More
        </a>
      </button>
    </section>
  );
}

export default HeroSection;
