import { useState } from "react";
import CoinRow from "./CoinRow";

function Market() {
  let [coinType, setCoinType] = useState([
    { type: "Meta" },
    { type: "Entertainment" },
    { type: "Energy" },
    { type: "NFT" },
    { type: "Gaming" },
    { type: "View all" },
  ]);
  return (
    <section className="relative">
      <h3>Market Update</h3>
      <div className="blur-red absolute z-[-10] top-10 -left-10 dark:z-0 "></div>
      <article>
        <div className="flex text-xs md:gap-x-2">
          {coinType.map(({ type }, idx) => (
            <p
              className="rounded-reg hover:bg-primary hover:bg-opacity-50 hover:text-abs-white p-1 px-2 cursor-pointer"
              key={idx}
            >
              {type}
            </p>
          ))}
        </div>
        <div>
          {/* come back and increase the number of table heads */}
          <table className="text-xs border-separate border-spacing-4 ">
            <thead>
              <tr className="">
                <th></th>
                <th>#</th>
                <th>Name</th>
                <th>last Price</th>
                <th className="hidden md:table-cell">Market Cap</th>
                <th className="hidden md:table-cell">24 %</th>
                <th className="hidden md:table-cell">Last 7 Days</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <CoinRow />
              <CoinRow />
              <CoinRow />
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </article>
    </section>
  );
}

export default Market;
