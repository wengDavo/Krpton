function TrendingCrypto({
  coin_id,
  data,
  id,
  market_cap_rank,
  name,
  price_btc,
  score,
  thumb: img,
  symbol,
}) {
  return (
    <div className="shadow-md p-2 min-w-[200px]  h-[100px] text-xs grid content-between border border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-neutral-15">
      <figure className="flex gap-1">
        <img src={img} alt="" className="h-4 md:h-6 aspect-square" />
        <p className="grow">{name}</p>
        <figcaption>{symbol}/USD</figcaption>
      </figure>
      <div className="text-sm font-medium">${data.price}</div>
      <div className="flex justify-between">
        <p className="text-[10px]">{data.total_volume_btc}</p>
        <p className="text-abs-white bg-warning-300 px-1 rounded-reg">
          {data.total_volume}
        </p>
      </div>
    </div>
  );
}

export default TrendingCrypto;
