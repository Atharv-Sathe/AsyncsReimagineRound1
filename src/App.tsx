// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";
import Preloader from "./components/preloader";
import HeroSection from "./components/HeroSection";

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
          <div
            id="bg-video-wrapper"
            className=" -z-10 w-screen h-screen object-cover">
            <BGVideo />
          </div>
          <Navbar />
          <HeroSection />
        </>
      )}
    </>
  );
}

export default App;
