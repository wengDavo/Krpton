function TrendingCategory({
  coins_count,
  data,
  id,
  market_cap_1h_change,
  name,
}) {
  return (
    <div className="shadow-md p-2 min-w-[200px]  h-[100px] text-xs grid content-between border border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-neutral-15">
      <figure className="grid gap-1">
        <p className="font-bold truncate">{name}</p>
        <figcaption >{data.total_volume}</figcaption>
      </figure>
      <div className="text-sm font-medium">{data.market_cap}</div>
      <div className="flex justify-between">
        <p className="">{market_cap_1h_change}</p>
        <p className="px-1 text-abs-white bg-warning-300 rounded-reg">
          {coins_count}
        </p>
      </div>
    </div>
  );
}

export default TrendingCategory;
