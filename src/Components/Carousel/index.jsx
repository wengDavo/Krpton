import { useState } from "react";
import arrowEast from "../../assets/icons/arrow-east.svg";
import arrowWest from "../../assets/icons/arrow-west.svg";

function Carousel({ children }) {
  let [cur, setCur] = useState(0);

  const prev = () => (cur == 0 ? setCur(children.length - 1) : setCur(--cur));
  const next = () => (cur == children.length - 1 ? setCur(0) : setCur(++cur));

  return (
    <article className="relative overflow-hidden md:space-x-2">
      <div
        className={`flex transition-transform duration-500 ease-in-out md:w-1/3`}
        style={{ transform: `translateX(-${cur * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute flex justify-center w-full space-x-1 bottom-2 ">
        {children.map((_, i) => {
          return (
            <div
              className={`rounded-full w-1  bg-abs-black  ${
                cur == i
                  ? "p-1 bg-neutral-40"
                  : "p-1 opacity-10 dark:bg-abs-white"
              }`}
            />
          );
        })}
      </div>
      <img
        src={arrowWest}
        alt="arrow left"
        className="absolute left-3 top-[50%] shadow-sm rounded-full bg-white-97 cursor-pointer h-4"
        onClick={prev}
      />
      <img
        src={arrowEast}
        alt="arrow right"
        className="absolute right-3 transform top-[50%] shadow-sm rounded-full bg-white-97 cursor-pointer h-4"
        onClick={next}
      />
    </article>
  );
}

export default Carousel;
