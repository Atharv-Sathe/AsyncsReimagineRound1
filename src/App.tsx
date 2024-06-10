// import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData=()=>{
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 8000);
  //   }
  //   fetchData();
  // }
  // , []);
  return (
    <>
      <div id="bg-video-wrapper" className=" -z-10 w-screen h-screen fixed object-cover">
        <BGVideo />
      </div>
      <Navbar />
    </>
  );
}

export default App;
