import coins from "../../assets/images/coinGold.svg";
import traffic from "../../assets/icons/trafficX.svg";
import coinBade from "../../assets/icons/CoinBade.svg";
import aks from "../../assets/icons/AKSPRODUCT.svg";
import CryptoCard from "./CryptoCard";
import { useState } from "react";

function Hero() {
  let [category, setCategory] = useState([
    { category: "Crypto" },
    { category: "Defi" },
    { category: "NFT" },
    { category: "Meta" },
  ]);
  return (
    <section className="space-y-10">
      <article className="grid gap-20 md:grid-cols-2 ">
        <div className="self-center">
          <div className="w-[90%] ">
            <h2 className="relative">
              Learn, Buy & Sell Crypto Easily
              <div className="absolute bottom-0 blur-peach-purple z-[-10] dark:z-0 "></div>
            </h2>
            <p className="text-sm font-medium my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              ea quidem deleniti saepe odit laboriosam! Sequi quis odio neque
              dolorum cupiditate nobis, ad est fuga ullam iste accusamus
              possimus voluptatum.
            </p>
            <button className="bg-primary text-sm p-2 rounded-lg text-abs-white border dark:bg-abs-dark">
              Get Started Now
            </button>
          </div>
          <div className="grid gap-2">
            <h3>Our Partners</h3>
            <figure className="flex items-center justify-between">
              <img src={coinBade} alt="" className="h-4" />
              <img src={traffic} alt="" className="h-4" />
              <img src={aks} alt="" className="h-4" />
            </figure>
          </div>
        </div>
        <div>
          <figure className="relative">
            <img src={coins} alt="golden coins" />
            <div className="absolute blur-peach bottom-[150px] left-[150px] z-[-10] dark:z-0 "></div>
          </figure>
        </div>
      </article>
      <article className="grid shadow-lg p-2 gap-2 border border-white-95 rounded-md dark:border-grey-15 md:p-6 md:w-[90%] md:mx-auto">
        <ul className="flex gap-x-2">
          {category.map((cat, idx) => {
            return (
              <li
                className="rounded-reg border border-primary text-xs py-1 px-4 hover:bg-primary hover:bg-opacity-50 cursor-pointer "
                key={idx}
              >
                {cat.category}
              </li>
            );
          })}
        </ul>
        <div className="flex overflow-y-scroll no-scrollbar gap-1">
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
        </div>
      </article>
    </section>
  );
}

export default Hero;
