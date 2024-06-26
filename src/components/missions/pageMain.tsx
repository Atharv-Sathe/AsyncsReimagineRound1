"use client";
import { ContainerScroll } from "./container-scro-animation";
import SpaceShipGame from "./SpaceShipGame";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-grow overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl md:text-[2rem]   font-semibold text-white">
              Unleash the power of
            </h1>
          </>
        }
      >
        <img
          src="/chandrayan.webp"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div>
      </div>
    </div>
  );
}

