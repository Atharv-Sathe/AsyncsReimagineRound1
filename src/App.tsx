import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";

function App() {
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
