function CryptoSimple(){
    return (
      <figure className="flex justify-between p-1 md:p-2 border-b border-white-90 dark:border-neutral-900 items-center">
        <div className="flex gap-x-2 items-center">
          <img src="" alt="" />
          <figcaption className="bg-white-90 p-1 rounded-sm dark:bg-neutral-900">
            BitCoin
          </figcaption>
          <p className="text-xs">BTC</p>
        </div>
        <div className="flex gap-x-2">
          <p className="text-xs">$43,975</p>
          <p className="text-success-300 text-xs">+2%</p>
        </div>
      </figure>
    );
}
export default CryptoSimple;