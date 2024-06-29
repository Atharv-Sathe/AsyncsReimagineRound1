"use client";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  duration = 6000, // Duration each image is displayed in milliseconds
  transitionDuration = 1000, // Duration of transition animation in milliseconds
  pauseDuration = 1000, // Pause duration between transitions in milliseconds
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  duration?: number; // Duration each image is displayed in milliseconds
  transitionDuration?: number; // Duration of transition animation in milliseconds
  pauseDuration?: number; // Pause duration between transitions in milliseconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const isFirstImage = useRef(true);

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
        img.src = image;
        img.onload = () => resolve(image);
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

    let interval: any;
    if (autoplay) {
      if (isFirstImage.current) {
        setTimeout(() => {
          handleNext();
          isFirstImage.current = false;
        }, duration);
      }

      interval = setInterval(() => {
        handleNext();
      }, duration + transitionDuration + pauseDuration);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, duration, transitionDuration, pauseDuration]);

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
        duration: transitionDuration / 1000, // Convert to seconds
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: transitionDuration / 1000, // Convert to seconds
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: transitionDuration / 1000, // Convert to seconds
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;
  console.log(loading);

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-white/10 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center filter-none"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
