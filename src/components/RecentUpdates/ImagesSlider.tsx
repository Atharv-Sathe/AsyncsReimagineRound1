"use client";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import './ImagesSlider.css';
import readMore from "../../assets/images/readmore.png";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  isSmall
}: {
  images: { src: string; title: string; description: string; link: string }[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  isSmall?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image["src"];
        img.onload = () => resolve(image["src"]);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        `overflow-hidden ${isSmall ? "h-full" : "h-[35vh]"}  w-full relative flex items-center justify-center`,
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {loading && <div className="loading-indicator">Loading...</div>} {/* Display loading indicator */}
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-fill object-center filter-none rounded-lg"
            onMouseEnter={handleMouseEnter} 
            // onMouseLeave={handleMouseLeave} 
          />
          <motion.div 
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              variants={slideVariants}
              // onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
          className={`updates-info text-white  absolute w-full h-full rounded-lg bottom-0 left-0 ${(isHovered) ? "info-active" : "info-inactive"} flex flex-col items-center justify-end font-space-mono`}>
              <h1 className={`title ${isSmall ? "text-[3vw]"  : "text-[1.5vw]"} font-bold text-isro-orange`}>{images[currentIndex]["title"]}</h1>
              <p className={`descrip ${isSmall ? "text-[2vw]"  : "text-[1vw]"} mb-8  text-isro-blue`}>{images[currentIndex]["description"]}</p>
              <a target="_blank" rel="noopener noreferrer" href={images[currentIndex]["link"]}
              className=" link  text-white text-[0.75vw]  hover:text-isro-blue absolute top-3 left-3"
              ><img className="h-6 w-6"  src={readMore} alt="readmore" /></a>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
