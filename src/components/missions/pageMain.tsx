
import { ContainerScroll } from "./container-scro-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-grow overflow-hidden my-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl lg:text-[2rem]   font-semibold text-white">
              Unleash the power of
            </h1>
          </>
        }
      >
        <img
          src="/chandrayan.webp"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top filter-none"
          draggable={false}
        />
      </ContainerScroll>
      <div>
      </div>
    </div>
  );
}

