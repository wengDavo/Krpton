function CryptoCard() {
  return (
    <div className="shadow-md p-2 w-[150px] min-w-max h-[100px] text-xs grid content-between border border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-grey-15">
      <figure className="flex">
        <img src="" alt="" />
        <p className="grow">Bitoin</p>
        <figcaption>BTC/USD</figcaption>
      </figure>
      <div className="text-xl font-medium">USD 46,168.35</div>
      <div className="flex justify-between">
        <p>35,215.23</p>
        <p className="text-abs-white bg-primary px-2 rounded-reg">-0.79%</p>
      </div>
    </div>
  );
}

export default CryptoCard;
