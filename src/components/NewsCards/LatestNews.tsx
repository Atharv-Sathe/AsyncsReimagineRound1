import React, { useEffect, useState } from "react";
import { NewsItems } from "../../utils/data";
import CardItem from "./CardItem";
import { cn } from "../../utils/cn";

export default function LatestNews() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

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

  return (
    <div
      className="flex flex-col scroller relative z-20 w-full overflow-hidden"
      ref={containerRef}
    >
      <h2 className="text-5xl text-white pl-20 pt-20 pb-10 font-space">
        Latest News
      </h2>
      <ul
        className={cn(
          "flex flex-row min-w-full w-max hover:overflow-x-auto no-scrollbar",
          start && "animate-scroll ",
          "hover:[animation-play-state:paused]",
          "scroll-smooth"
        )}
        ref={scrollerRef}
      >
        {NewsItems.map((item) => (
          <CardItem key={item.title} cardItem={item} className="m-1" />
        ))}
      </ul>
    </div>
  );
}
