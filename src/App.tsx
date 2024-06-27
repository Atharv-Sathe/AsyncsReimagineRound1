// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";
import Preloader from "./components/preloader";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/NewsCards/LatestNews";
import HighlightsSection from "./components/Highlights/HighlightsSection";
import Footer from "./components/Footer";
// import Model from "./components/modelsSection/model";
import SparklesBackground from "./components/SparklesBackground";
import RecUpd from "./components/RecentUpdates/RecUpd";
import ThreeJsComp from "./components/modelsSection/webglComp";
import Model from "./components/modelsSection/model";




function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div id="bg-video-wrapper" className=" -z-10 h-screen object-cover">
            <BGVideo />
          </div>
          <Navbar />
          <HeroSection />
          <SparklesBackground>
            <div className="flex flex-row h-[50vh]">
              <HighlightsSection />
              <RecUpd />
            </div>
            <LatestNews />
            <Model />
          </SparklesBackground>
          <h2 className="text-4xl text-center text-white">3D Models</h2>
          <ThreeJsComp />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
