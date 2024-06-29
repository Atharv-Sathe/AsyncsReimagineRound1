"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "./images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/MRM_8583.JPG.webp",
    "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/resized/ch3_9_medium.jpg.webp",
    "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/resized/P19_medium.jpg.webp",
    "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/ch3_3.jpg.webp",
  ];
  return (
    <ImagesSlider className="h-full w-30" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 h-full w-full"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-isro-orange py-4">
          Chandrayaan-3 is on its journey to the moon.
        </motion.p>

        <motion.p className="text-center text-isro-blue [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] text-lg md:text-2xl mt-4">
          Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate
          end-to-end capability in safe landing and roving on the lunar surface.
          It consists of Lander and Rover configuration. It will be launched by
          LVM3 from SDSC SHAR, Sriharikota. The propulsion module will carry the
          lander and rover configuration till 100 km lunar orbit. The propulsion
          module has Spectro-polarimetry of Habitable Planet Earth (SHAPE)
          payload to study the spectral and Polari metric measurements of Earth
          from the lunar orbit.
        </motion.p>

        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>More →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
