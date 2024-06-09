import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
// import StarBackground from "./components/preloaderTest2";
import Preloader from "./components/preloader";

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
    {/* {isLoading && <Preloader />} */}
      <Preloader />
      {/* <BGVideo /> */}
    </>
  );
}

export default App;
