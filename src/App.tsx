// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";
// import Preloader from "./components/preloader";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/NewsCards/LatestNews";
import HighlightsSection from "./components/Highlights/HighlightsSection";
import Footer from "./components/Footer";
// import Model from "./components/modelsSection/model";
import SparklesBackground from "./components/SparklesBackground";
import RecUpd from "./components/RecentUpdates/RecUpd";
import Model from "./components/modelsSection/model";
import Sidebar from "./components/IsroSidebar/Sidebar";
import FooterMobile from "./components/FooterMobile";
import { LatestNewsMobile } from "./components/NewsCards/LatestNewsMobile";
import ParticleBackground from "./components/preloaderNew";
import { Slider } from "./components/Others/others3";
import Heading from "./components/Others/heading";
// import Others4 from "./components/Others/others4";

const slideData = [
  {
    index: 0,
    headline: "ISRO Headquarters",
    button: "Visit ISRO",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/isroHQs.jpg.webp",
  },

  {
    index: 1,
    headline: "Vikram Sarabhai Space Centre",
    button: "Learn More",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/VSSC.jpg.webp",
  },

  {
    index: 2,
    headline: "Liquid Propulsion Systems Centre",
    button: "Explore LPSC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/LPSC.jpg.webp",
  },

  {
    index: 3,
    headline: "Satish Dhawan Space Centre",
    button: "Discover SHAR",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/SHAR.jpg.webp",
  },

  {
    index: 4,
    headline: "U R Rao Satellite Centre",
    button: "Visit URSC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/ursc.jpg.webp",
  },

  {
    index: 5,
    headline: "Space Applications Centre",
    button: "Explore SAC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/sac.jpg.webp",
  },

  {
    index: 6,
    headline: "National Remote Sensing Centre",
    button: "Learn About NRSC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/nrsc.jpg.webp",
  },

  {
    index: 7,
    headline: "Hindustan Aeronautics Limited",
    button: "Visit HAL",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/HSFC.png.webp",
  },

  {
    index: 8,
    headline: "ISRO Propulsion Research Complex",
    button: "Explore IPRC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/IPRC.jpg.webp",
  },

  {
    index: 9,
    headline: "Indian Institute of Space Science and Technology",
    button: "Learn About IIST",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/IISU.jpg.webp",
  },

  {
    index: 10,
    headline: "ISRO Telemetry, Tracking and Command Network",
    button: "Discover ISTRAC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/istrac.jpg.webp",
  },

  {
    index: 11,
    headline: "Master Control Facility",
    button: "Visit MCF",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/MCF.png.webp",
  },

  {
    index: 12,
    headline: "Data Centre and Educational Utilisation",
    button: "Learn About DECU",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/decu_img.png.webp",
  },

  {
    index: 13,
    headline: "Launch Vehicle Assembly Building",
    button: "Explore LEOS",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/LEOS.png.webp",
  },

  {
    index: 14,
    headline: "Indian Institute of Remote Sensing",
    button: "Visit IIRS",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/IIRS.png.webp",
  },

  {
    index: 15,
    headline: "ISRO Headquarters",
    button: "Visit ISRO",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/isroHQs.jpg.webp",
  },

  {
    index: 16,
    headline: "Vikram Sarabhai Space Centre",
    button: "Learn More",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/VSSC.jpg.webp",
  },

  {
    index: 17,
    headline: "Liquid Propulsion Systems Centre",
    button: "Explore LPSC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/LPSC.jpg.webp",
  },

  {
    index: 18,
    headline: "Satish Dhawan Space Centre",
    button: "Discover SHAR",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/SHAR.jpg.webp",
  },

  {
    index: 19,
    headline: "U R Rao Satellite Centre",
    button: "Visit URSC",
    src: "https://www.isro.gov.in/media_isro/image/centreimages/ursc.jpg.webp",
  },
]


const breakpointSidebar = 1200;
const breakpointMobile = 780;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpointSidebar);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < breakpointMobile
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < breakpointSidebar);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointMobile);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <SparklesBackground>
          <ParticleBackground/>
        </SparklesBackground>
        // <Others2 />
      
      ) : (
        <>
          <div id="bg-video-wrapper" className=" -z-10 h-screen object-cover">
            <BGVideo />
          </div>
          {isSmall ? <Sidebar /> : <Navbar />}
          <HeroSection />
          <SparklesBackground>
            <div
              className={`${
                isSmall
                  ? "flex flex-col w-screen h-fit"
                  : "flex flex-row h-[50vh] w-screen"
              }`}
            >
              <HighlightsSection isSmall={isSmall} />
              <RecUpd isSmall={isSmall} />
            </div>
            {isMobile ? <LatestNewsMobile /> : <LatestNews />}
            <Model />
            <Heading />
            <Slider slides={slideData} heading="Other Projects" />
          </SparklesBackground>
          {/* <Others4 /> */}
          {isMobile ? <FooterMobile /> : <Footer />}
        </>
      )}
    </>
  );
}

export default App;
