import React, { useEffect, useState } from "react";
import { NewsItems } from "../../utils/data";
import CardItem from "./CardItem";
import { cn } from "../../utils/cn";
import './LatestNews.css';

export default function LatestNews() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      containerRef.current.style.setProperty("--animation-duration", "360s");
      setStart(true);
    }
  }

  const scrollToStart = () => {
    if (scrollerRef.current) {
      // Stop the animation
      scrollerRef.current.style.animationPlayState = 'paused';

      // Reset scroll position
      scrollerRef.current.scrollLeft = 0;

      // Reset the animation by removing it and then re-adding it
      const originalAnimation = scrollerRef.current.style.animation;
      scrollerRef.current.style.animation = 'none';

      // Force reflow to ensure the animation reset is applied
      // This is a trick to force the browser to recognize the change and apply it immediately
      void scrollerRef.current.offsetWidth;

      // Delay before resuming the animation
      setTimeout(() => {
        if (scrollerRef.current) {
          // Re-apply the original animation to effectively restart it
          scrollerRef.current.style.animation = originalAnimation;

          // Resume the animation
          scrollerRef.current.style.animationPlayState = 'running';
        }
      }, 100); // A delay of 100 milliseconds for visual effect
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  return (
    <div
      className="flex flex-col scroller relative z-20 w-full overflow-hidden"
      ref={containerRef}
    >
      <h2 className="text-5xl text-white pl-20 pt-20 pb-10 font-space">
        Latest News
      </h2>
      <button className="scroll-to-start-btn arrowMove absolute top-28 right-10 h-9 w-9 text-white"
      onClick={scrollToStart}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '100%', height: '100%' }}>
        <title>4-Arrow Left</title>
        <g id="_4-Arrow_Left" data-name="4-Arrow Left">
          <path
            fill="white"
            d="M32,15H3.41l8.29-8.29L10.29,5.29l-10,10a1,1,0,0,0,0,1.41l10,10,1.41-1.41L3.41,17H32Z"
          />
        </g>
      </svg> 
      </button>
      <ul
        className={cn(
          "news-container  flex flex-row min-w-full w-max overflow-x-auto no-scrollbar",
          start && "animate-scroll ",
          "scroll-smooth",
          isHovering && "hover:[animation-play-state:paused]"
        )}
        ref={scrollerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {NewsItems.map((item) => (
          <CardItem key={item.title} cardItem={item} className="m-1" />
        ))}
      </ul>
    </div>
  );
}
