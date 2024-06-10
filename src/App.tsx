// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";
import Preloader from "./components/preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setIsLoading(false);
    const timer = setTimeout(() => {
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
            className=" -z-10 w-screen h-screen fixed object-cover"
          >
            <BGVideo />
          </div>
          <Navbar />
        </>
      )}
    </>
  );
}

export default App;
