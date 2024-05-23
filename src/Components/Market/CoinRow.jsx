import { useRef } from "react";

function CoinRow({
  market_cap_rank,
  symbol,
  id,
  image,
  current_price,
  market_cap,
  fully_diluted_valuation,
  total_volume,
  high_24h,
  low_24h,
  price_change_percentage_24h,
  circulating_supply,
  total_supply,
  max_supply,
  ath,
  atl,
}) {
  let ref = useRef(null);
  return (
    <tr className="">
      <td>{market_cap_rank}</td>
      <td>
        <img src={image} alt="" className="w-4" />
      </td>
      <td className="">{id}</td>
      <td className="hidden md:table-cell">{symbol}</td>
      <td className="hidden md:table-cell">{current_price}</td>
      <td className="hidden md:table-cell">{market_cap}</td>
      <td className="hidden md:table-cell">{fully_diluted_valuation}</td>
      <td className="hidden md:table-cell">{total_volume}</td>
      <td className="hidden md:table-cell">{high_24h}</td>
      <td className="hidden md:table-cell">{low_24h}</td>
      <td className="hidden md:table-cell">{price_change_percentage_24h}</td>
      <td className="hidden md:table-cell">{circulating_supply}</td>
      <td className="hidden md:table-cell">{total_supply}</td>
      <td className="hidden md:table-cell">{ath}</td>
      <td className="hidden md:table-cell">{atl}</td>

      <td className="inline-block px-1 my-auto align-bottom border rounded-lg hover:bg-warning-700 hover:text-abs-white border-primary hover:bg-opacity-50">
        Trade
      </td>
    </tr>
  );
}

export default CoinRow;
