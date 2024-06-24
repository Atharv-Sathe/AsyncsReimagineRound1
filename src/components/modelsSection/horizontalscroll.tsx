import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalContainerScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  let scrollTriggerInstance: gsap.core.Tween | null = null; // Explicitly define the type

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const firstDiv = container.querySelector<HTMLDivElement>('.w-full:first-child');

      if (firstDiv) {
        // Animate the container when it enters the viewport
        scrollTriggerInstance = gsap.to(container, {
          x: () => -(container.scrollWidth - container.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${container.scrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onLeave: () => {
              gsap.set(container, { clearProps: "all" });
            },
          },
        });

        // Check if scrollTriggerInstance and scrollTrigger are defined before accessing
        if (scrollTriggerInstance && scrollTriggerInstance.scrollTrigger) {
          scrollTriggerInstance.scrollTrigger.kill();
        }
      }
    }

    // Cleanup on unmount
    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.scrollTrigger?.kill(); // Optional chaining to handle potential undefined
      }
    };
  }, []);

  return (
    <div className="w-full h-[30vh] overflow-hidden relative" ref={containerRef}>
      <div className="w-[200vw] h-full flex flex-row">
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-purple-500"></div>
      </div>
    </div>
  );
}
