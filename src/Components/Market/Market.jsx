import { useEffect, useState } from "react";
import CoinRow from "./CoinRow";
import axios from "axios";

function Market() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.COIN_GECKO_API_KEY;
  useEffect(() => {
    async function getCoins() {
      try {
        let response = await axios({
          method: "GET",
          url: "https://api.coingecko.com/api/v3/coins/markets",
          headers: {
            Accept: "application/json",
            x_cg_demo_api_key: apiKey,
          },
          params: {
            per_page: "20",
            vs_currency: "usd",
          },
        });
        console.log(response.data);
        setCoins(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCoins();
  }, []);
  let [coinType, setCoinType] = useState([{ type: "Crypto" }]);
  return (
    <section className="relative">
      <h3>Market Update</h3>
      <div className="blur-red absolute z-[-10] top-10 -left-10 dark:z-0 "></div>
      <article>
        <div className="flex text-xs md:gap-x-2">
          {coinType.map(({ type }, idx) => (
            <p
              className="p-1 px-2 cursor-pointer rounded-reg bg-warning-300 hover:bg-opacity-50 hover:text-abs-white dark:text-warning-00"
              key={idx}
            >
              {type}
            </p>
          ))}
        </div>
        <div>
          <table className="text-xs border-separate border-spacing-4 md:border-spacing-2">
            <thead>
              <tr className="">
                <th>#</th>
                <th></th>
                <th className=""></th>
                <th className="hidden md:table-cell">Symbol</th>
                <th className="hidden md:table-cell">Current Price</th>
                <th className="hidden md:table-cell">Market Cap</th>
                <th className="hidden md:table-cell">
                  Fully Diluted Valuation
                </th>
                <th className="hidden md:table-cell">Total Volume</th>
                <th className="hidden md:table-cell">high 24</th>
                <th className="hidden md:table-cell">Low 24</th>
                <th className="hidden md:table-cell">Price Change %</th>
                <th className="hidden md:table-cell">Circulating Supply</th>
                <th className="hidden md:table-cell">Total Supply</th>
                <th className="hidden md:table-cell">Ath</th>
                <th className="hidden md:table-cell">Atl</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => {
                return <CoinRow key={coin.id} {...coin} />;
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </article>
    </section>
  );
}

export default Market;
