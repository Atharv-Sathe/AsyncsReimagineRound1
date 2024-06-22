import { useEffect, useState } from "react";
import "./Carousel.css";

type CarouselProps = {
  images: {
    id: number;
    url: string;
    title: string;
    description: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const [current, setCurrent] = useState(0);
  const [timeOut, setTimeOut] = useState<number>(0);

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  const [autoPlay, setAutoPlay] = useState(true);

  /*
  Importance of useEffect Cleanup Function in Carousel Component:
  Here’s what’s happening =>
  1. Pagination Dots: When a pagination dot is clicked, it sets the current state to the index of the clicked dot. This change in 
  state triggers a re-render of the carousel, displaying the corresponding image.
  2. Cleanup Function: The cleanup function provided in the useEffect hook is called every time before the effect runs again, which 
  includes when the current state changes. This ensures that any ongoing timeout (set for auto-playing the carousel) is cleared, 
  preventing it from interfering with the manual change caused by clicking a pagination dot.
  3. Consistent Behavior: By clearing the timeout whenever current changes, you avoid issues like the carousel trying to auto-play to the next image while the user is manually navigating through the images. This makes the behavior of the carousel consistent and predictable.
  */

  useEffect(() => {
    if (autoPlay) {
      const id = setTimeout(() => slideRight(), 2500);
      setTimeOut(id); // This is a setter function for the state variable timeOut, not to be confused with the setTimeout function.
    }

    return () => clearTimeout(timeOut);
  }, [current, autoPlay]);

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  const hadleMouseLeave = () => setAutoPlay(true);

  return (
    <div className="carousel flex h-full w-full rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={hadleMouseLeave}
    >
      <div className="carousel-wrapper relative w-full h-full rounded-lg">
        {images.map((img, ind) => (
          <div key={ind} className={`${ind === current ? "carousel-card carousel-card-active" : "carousel-card"}  rounded-lg`}>
            <img className="card-image w-full h-full  filter-none object-fill rounded-lg"  src={img.url} alt="carousel" />
            <div className="card-overlay h-full w-full absolute bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg"> 
              <h2>{img.title}</h2>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
        <div className="carousel-arrow-left hover:bg-isro-orange" onClick={slideLeft}>&lsaquo;</div>
        <div className="carousel-arrow-right hover:bg-isro-blue" onClick={slideRight}>&rsaquo;</div>
        <div className="carousel-pagination absolute left-1/2  flex gap-2">
          {images.map(( _ , ind) => (
            <div key={ind} className={`${ind === current ? "pagination-dot pagination-dot-active" : "pagination-dot"}`}
            onClick={() => setCurrent(ind)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;
