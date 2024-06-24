import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  missionsContainerRef: React.RefObject<HTMLDivElement>;
}

const HorizontalSnappingSections: React.FC<Props> = ({ missionsContainerRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && missionsContainerRef.current) {
      // Pin the MissionsSection container
      gsap.to(missionsContainerRef.current, {
        scrollTrigger: {
          trigger: missionsContainerRef.current,
          start: "top top",
          end: () => `+=${containerRef.current!.scrollWidth}`,
          pin: true,
          scrub: true,
        },
      });

      // Create the horizontal scrolling animation
      const sections = gsap.utils.toArray<HTMLDivElement>(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${containerRef.current!.scrollWidth}`,
          scrub: true,
          snap: 1 / (sections.length - 1),
        },
      });
    }
  }, [missionsContainerRef]);

  return (
    <div className="horizontal-container" ref={containerRef}>
      <div className="description panel bg-blue-500">
        <div>
          <h1>Horizontal snapping sections (simple)</h1>
          <p>
            Scroll vertically to scrub the horizontal animation. It also
            dynamically snaps to the sections in an organic way based on the
            velocity. The snapping occurs based on the natural ending position
            after momentum is applied, not a simplistic "wherever it is
            when the user stops".
          </p>
          <div className="scroll-down">
            Scroll down
            <div className="arrow" />
          </div>
        </div>
      </div>
      <Section color="red" text="ONE" />
      <Section color="orange" text="TWO" />
      <Section color="purple" text="THREE" />
      <Section color="green" text="FOUR" />
      <Section color="gray" text="FIVE" />
    </div>
  );
};

interface SectionProps {
  color: string;
  text: string;
}

const Section: React.FC<SectionProps> = ({ color, text }) => {
  return (
    <section className={`panel bg-${color}-500`}>{text}</section>
  );
};

export default HorizontalSnappingSections;
