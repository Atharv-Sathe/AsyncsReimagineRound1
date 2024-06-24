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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>More →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
