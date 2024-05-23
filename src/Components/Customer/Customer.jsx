import { useRef, useState } from "react";

import lola from "../../assets/people/lola.svg";
import tod from "../../assets/people/todd.svg";
import Avatar1 from "../../assets/people/Avatar1.svg";
import Avatar2 from "../../assets/people/Avatar1.svg";
import Avatar3 from "../../assets/people/Avatar3.svg";

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
      <article className="grid gap-2 text-center">
        <h3>Our Customers Love What We Do</h3>
        <p>Trade Your Ideas Into Reality with us with Krypton</p>
        <figure className="relative mb-40">
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
            src={Avatar1}
            alt=""
            className="w-[50px] aspect-square z-20 absolute left-[40%] md:left-[48%]"
          />
          <img
            src={Avatar2}
            alt=""
            className="w-[50px] aspect-square z-30 absolute left-[50%] md:left-[52%]"
          />
          <img
            src={Avatar3}
            alt=""
            className="w-[50px] aspect-square z-40 absolute left-[60%] md:left-[56%]"
          />
          <figcaption className="absolute m-2 text-xs font-bold transform -translate-x-1/2 translate-y-1/2 top-10 left-1/2">
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
          className="flex gap-2 overflow-x-hidden no-scrollbar scroll-smooth "
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
