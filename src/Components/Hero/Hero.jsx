import coins from "../../assets/images/coinGold.svg";
import traffic from "../../assets/icons/trafficX.svg";
import coinBade from "../../assets/icons/CoinBade.svg";
import aks from "../../assets/icons/AKSPRODUCT.svg";
import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import TrendingCrypto from "../TrendingCrypto";
import TrendingNft from "../TrendingNft";
import TrendingCategory from "../TrendingCategory";

function Hero() {
  const apiKey = import.meta.env.COIN_GECKO_API_KEY;
  const [tab, setTab] = useState("crypto");
  const [trending, setTrending] = useState([]);
  const [crypto, setCrtpyo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrending() {
      try {
        const response = await axios({
          method: "get",
          url: "https://api.coingecko.com/api/v3/search/trending",
          headers: {
            x_cg_demo_api_key: apiKey,
            Accept: "application/json",
          },
        });
        setTrending(response.data)
        setCrtpyo(response.data.coins)
        setError(null);
      } catch (error) {
        console.error(error.message);
        setError(error.message)
        setTrending(null)
      } finally {
        setLoading(false);
      }
    }
    getTrending();
  }, []);
  return (
    <section className="space-y-10">
      <article className="grid gap-20 md:grid-cols-2 ">
        <div className="self-center">
          <div className="w-[90%] ">
            <h2 className="relative">
              Learn, Buy & Sell Crypto Easily
              <div className="absolute bottom-0 blur-peach-purple z-[-10] dark:z-0 "></div>
            </h2>
            <p className="my-2 text-sm font-medium">
              Krypton is your gateway to the world of digital currencies.
              Designed with both beginners and experienced users in mind,
              Krypton offers a seamless, secure, and efficient platform for
              managing all your cryptocurrency needs. Whether you're looking to
              buy, sell, trade, or simply stay informed about the latest trends
              in the crypto market, Krypton has got you covered.
            </p>
            <button className="p-2 text-sm border rounded-lg bg-warning-500 text-abs-white dark:bg-abs-dark dark:hover:bg-warning-400">
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
      <article className="grid shadow-lg p-2 gap-2 border border-white-95 rounded-md dark:border-neutral-15 md:p-6 md:w-[90%] md:mx-auto">
        <ul className="flex gap-x-2">
          <li
            className="px-4 py-1 text-xs border cursor-pointer rounded-reg border-warning-300 hover:bg-warning-300 hover:bg-opacity-50"
            onClick={() => setTab("crypto")}
          >
            Crypto
          </li>
          <li
            className="px-4 py-1 text-xs border cursor-pointer rounded-reg border-warning-300 hover:bg-warning-300 hover:bg-opacity-50"
            onClick={() => setTab("nft")}
          >
            NFTS
          </li>
          <li
            className="px-4 py-1 text-xs border cursor-pointer rounded-reg border-warning-300 hover:bg-warning-300 hover:bg-opacity-50"
            onClick={() => setTab("all")}
          >
            see all
          </li>
        </ul>
        <div className="flex gap-1 overflow-y-scroll no-scrollbar">
          {(function () {
            switch (tab) {
              case "crypto":
                return (
                  <>
                    {crypto.map((trendingCrypto) => {
                      return (
                        <TrendingCrypto
                          {...trendingCrypto.item}
                          key={trendingCrypto.item.id}
                        />
                      );
                    })}
                  </>
                );

              case "nft":
                return (
                  <>
                    {trending.nfts.map((trendingNft) => {
                      return (
                        <TrendingNft {...trendingNft} key={trendingNft.id} />
                      );
                    })}
                    ;
                  </>
                );
              case "all":
                return (
                  <>
                    {trending.categories.map((cat) => {
                      return <TrendingCategory {...cat} key={cat.id} />;
                    })}
                  </>
                );

              default:
                return <div>...</div>;
            }
          })()}
          {/* implement auto rotating carousel */}
        </div>
      </article>
    </section>
  );
}

export default Hero;
