import { useState } from "react";
import ParticleBackground from "./preloaderNew";
import './launch.css';

export default function Launch({
  setIsLoading,
}: {
  setIsLoading: (value: boolean) => void;
}) {
  const [launched, setLaunched] = useState(false);
  function handleLaunch() {
    setLaunched(true);
  }
  return (
    <div>
      {!launched ? (
        <div className="flex w-screen h-screen justify-center items-center">
          <div
            onClick={handleLaunch}
            className="button text-[18px] sm:text-2xl md:text-3xl lg:text-4xl p-8 w-[fit-content] cursor-pointer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p className="jaguar">Launch</p> 
          </div>
        </div>
      ) : (
        <ParticleBackground setIsLoading={setIsLoading} />
      )}
    </div>
  );
}
