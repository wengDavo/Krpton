function CryptoDetailed() {
  return (
    <section className="border border-white-90 shadow-md p-2 space-y-2 dark:border-neutral-900">
      <article className="space-y-2">
        <article className="">
          <div className="flex gap-x-2">
            <img src="" alt="" />
            <div>
              <p>BitCoin</p>
              <p className="text-sm text-primary-300">BTC</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto bg-primary-100 dark:bg-neutral-900 p-1 rounded-sm"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div className="flex justify-between text-sm my-2">
            <p className="bg-white-90 p-[2px] rounded-sm dark:bg-neutral-900">
              Rank #1
            </p>
            <p>Coin</p>
            <p>On 2,771,773 watchlists</p>
          </div>
        </article>
        <article className="text-sm space-y-4">
          <div className="flex justify-between">
            <p className="text-lg font-bold">$43,975.72</p>
            <p className="flex">
              BitCoin Price
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </p>
          </div>
          <div>
            <p className="flex font-thin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
              High/Low Price
            </p>
            <progress
              id="high/low"
              value={32}
              max={100}
              className="w-full h-[6px] rounded-reg"
            ></progress>
            <div className="flex justify-between font-thin">
              <p>Low: $682682</p>
              <p>High: $20-924</p>
            </div>
          </div>
        </article>
      </article>
      <article className="grid grid-cols-2 gap-2">
        <div className="p-2 bg-warning-200 rounded-sm text-sm">
          <p className="flex text-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            Market Cap
          </p>
          <p className="text-neutral-900">$8639163130137013</p>
          <p className="text-success-500">+2%</p>
        </div>
        <div className="p-2 bg-neutral-200 rounded-sm text-sm">
          <p className="flex text-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            full Diluted
          </p>
          <p className="text-neutral-900">$8639163130137013</p>
          <p className="text-success-500">+2%</p>
        </div>
        <div className="p-2 bg-primary-200 rounded-sm text-sm">
          <p className="flex text-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            24 Volume
          </p>
          <p className="text-neutral-900">$8639163130137013</p>
          <p className="text-success-500">+2%</p>
        </div>
        <div className="p-2 bg-success-200 rounded-sm text-sm">
          <p className="flex text-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            Circulating
          </p>
          <p className="text-neutral-900">$8639163130137013</p>
          <p className="text-success-500">+2%</p>
        </div>
      </article>
    </section>
  );
}

export default CryptoDetailed;
