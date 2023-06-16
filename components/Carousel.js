import { createRef, useState } from "react";

export function CarouselImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`ml-auto mr-auto object-cover h-60 transform md:hover:scale-150 md:transition md:duration-1000 md:ease-out`}
    />
  );
}

export function Carousel({ tiles }) {
  const [currentTile, setCurrentTile] = useState(0);
  const arrowStyle =
    "absolute text-slate-600 font-sans text-2xl z-10 bg-gray-300 h-8 w-8 rounded-md opacity-75 flex items-center justify-center";

  const refs = tiles.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToTile = (i) => {
    setCurrentTile(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const nextTile = () => {
    if (currentTile >= tiles.length - 1) {
      scrollToTile(0);
    } else {
      scrollToTile(currentTile + 1);
    }
  };

  const previousTile = () => {
    if (currentTile === 0) {
      scrollToTile(tiles.length - 1);
    } else {
      scrollToTile(currentTile - 1);
    }
  };

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousTile : nextTile}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="relative w-full items-center justify-center">
      <div className="carousel">
        {tiles.length > 1 && sliderControl(true)}
        {tiles.map((tile, idx) => (
          <div
            className="w-full flex-shrink-0"
            key={`${tile.name}_${idx}`}
            ref={refs[idx]}
          >
            <CarouselImage src={tile.url} alt={tile.name} />
          </div>
        ))}
        {tiles.length > 1 && sliderControl()}
      </div>
    </div>
    // </div>
  );
}
