import "./style.css";
import { useRef, useState } from "react";

export interface SlideType {
  index: number;
  headline: string;
  button: string;
  src: string;
}

export function Slide(props: {
  slide: SlideType;
  current: number;
  handleSlideClick: (index: number) => void;
}) {
  const slideRef = useRef<HTMLLIElement>(null);

  function handleMouseMove(event: any) {
    const el = slideRef.current;
    if (el === null) return;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      String(event.clientX - (r.left + Math.floor(r.width / 2)))
    );
    el.style.setProperty(
      "--y",
      String(event.clientY - (r.top + Math.floor(r.height / 2)))
    );
  }

  function handleMouseLeave() {
    if (slideRef.current === null) return;
    slideRef.current.style.setProperty("--x", "0");
    slideRef.current.style.setProperty("--y", "0");
  }

  function handleSlideClick() {
    props.handleSlideClick(props.slide.index);
  }

  function imageLoaded(event: any) {
    event.target.style.opacity = 1;
  }

  return (
    <li
      ref={slideRef}
      className={`slide ${
        props.current === props.slide.index
          ? props.current - 1 === props.slide.index
            ? "slide--previous"
            : "slide--current"
          : "slide--next"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleSlideClick}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image filter-none"
          src={props.slide.src}
          alt={props.slide.headline}
          onLoad={imageLoaded}
        />
      </div>
      <article className="slide__content">
        <h2 className="slide__headline mb-6 text-isro-orange text-5xl">{props.slide.headline}</h2>
        <a href="#" className="slide__action btn
          transition-colors  duration-500 text-isro-blue font-bold bg-transparent  hover:bg-white hover:text-black hover:[box-shadow:_0_0_10px_2px_rgba(255_255_255/_100%)] hover:rounded=[5px]
        ">
          {props.slide.button}
        </a>
      </article>
    </li>
  );
}

export function SliderControl({
  type,
  title,
  handleClick,
  color,
}: {
  type: string;
  title: string;
  color: string;
  handleClick: () => void;
}) {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className={`icon fill-${color}`} viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
}

export function Slider(props: { heading: string; slides: SlideType[] }) {
  const [current, setCurrent] = useState(0);

  function handlePreviousClick() {
    const previous = current - 1;
    setCurrent(previous < 0 ? props.slides.length - 1 : previous);
  }

  function handleNextClick() {
    const next = current + 1;
    setCurrent(next === props.slides.length ? 0 : next);
  }

  function handleSlideClick(index: number) {
    if (current !== index) {
      setCurrent(index);
    }
  }

  return (
    <div
      className="slider my-4"
      aria-labelledby={`slider-heading__${props.heading
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      
      <ul
        className="slider__wrapper"
        style={{
          transform: `translateX(-${current * (100 / props.slides.length)}%)`,
        }}
      > 
        {props.slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="slider__controls ">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
          color="isro-blue"
        />
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
          color="isro-blue"
        />
      </div>
    </div>
  );
}
