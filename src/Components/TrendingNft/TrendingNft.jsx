function TrendingNft({
  data,
  id,
  name,
  native_currency_symbol,
  nft_contract_id,
  symbol,
  thumb: img,
}) {
  return (
    <div className="shadow-md p-2 min-w-[200px]  h-[100px] text-xs grid content-between border border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-neutral-15">
      <figure className="flex gap-1">
        <img src={img} alt="" className="h-10 aspect-square" />
        <p className="grow">{name}</p>
        <figcaption>{symbol}</figcaption>
      </figure>
      <div className="text-sm font-medium">{data.floor_price}</div>
      <div className="flex justify-between">
        <p className="text-[10px]">{nft_contract_id}</p>
        <p className="text-abs-white bg-warning-300 px-1 rounded-reg">
          {native_currency_symbol}
        </p>
      </div>
    </div>
  );
}

export default TrendingNft;
