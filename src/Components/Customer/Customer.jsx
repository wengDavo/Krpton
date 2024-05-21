import { useRef, useState } from "react";

import lola from "../../assets/people/lola.svg";
import tod from "../../assets/people/todd.svg";
import arrowEast from "../../assets/icons/arrow-east.svg";
import arrowWest from "../../assets/icons/arrow-west.svg";

import { CustomerReviews } from "./CustomerReviews";
import CustomerReviewCard from "./CustomerReviewCard";

function Customer() {
  const sliderRef = useRef(null);
  const scrollAmount = 500;
  const [reviews, setReviews] = useState(CustomerReviews);

  return (
    <section>
      <article className="text-center grid gap-2">
        <h3>Our Customers Love What We Do</h3>
        <p>Trade Your Ideas Into Reality with us with Krypton</p>
        <figure className="mb-40 relative">
          <img
            src={lola}
            alt=""
            className="w-[50px] aspect-square absolute left-[20%] md:left-[40%]"
          />
          <img
            src={tod}
            alt=""
            className="w-[50px] aspect-square z-10 absolute left-[30%] md:left-[44%]"
          />
          <img
            src={lola}
            alt=""
            className="w-[50px] aspect-square z-20 absolute left-[40%] md:left-[48%]"
          />
          <img
            src={tod}
            alt=""
            className="w-[50px] aspect-square z-30 absolute left-[50%] md:left-[52%]"
          />
          <img
            src={lola}
            alt=""
            className="w-[50px] aspect-square z-40 absolute left-[60%] md:left-[56%]"
          />
          <figcaption className="absolute top-10 m-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs font-bold">
            30+ Customer Reviews
          </figcaption>
        </figure>
      </article>
      {/* come back for the carousel */}
      <article className="relative">
        <img
          src={arrowWest}
          alt="arrow left"
          className="absolute left-3 top-[50%] shadow-sm rounded-full bg-white-97 cursor-pointer"
          onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft -= scrollAmount;
          }}
        />
        <div
          className="flex overflow-x-hidden no-scrollbar scroll-smooth gap-2 "
          ref={sliderRef}
        >
          {reviews.map((card, idx) => {
            return <CustomerReviewCard {...card} key={idx} />;
          })}
        </div>
        <img
          src={arrowEast}
          alt="arrow right"
          className="absolute right-3 transform top-[50%] shadow-sm rounded-full bg-white-97 cursor-pointer"
          onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft += scrollAmount;
          }}
        />
      </article>
    </section>
  );
}

export default Customer;
