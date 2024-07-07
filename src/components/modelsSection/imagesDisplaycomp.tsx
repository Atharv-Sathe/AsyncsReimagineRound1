"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "./images-slider";

export function ImagesSliderDemo({
  title,
  description,
  hrefUrl,
  images
}: {
  title: string;
  description: string;
  hrefUrl: string;
  images: string[];
}) {
  return (
    <ImagesSlider className="h-full w-30 rounded-lg" images={images}>
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
        className="z-50 flex flex-col justify-center items-center bg-slate-900/50  rounded-lg p-4 h-full w-full"
      >
        <motion.p className="font-bold text-xl lg:text-6xl text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] bg-clip-text text-isro-orange ">
          {title}
        </motion.p>

        <motion.p className=" text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] text-lg overflow-auto lg:text-2xl mt-4">
          {description}
        </motion.p>
        <a href={hrefUrl} target="_blank">
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>More →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
}
