function MarketPagination(){
    return (
      <article className="flex gap-2 text-sm ">
        <div>
          <p>1-20 of 9,383 currencies</p>
        </div>
        <div className="flex gap-4">
          {/* chevron left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6 cursor-pointer border dark:border-primary-200 rounded-sm dark:stroke-primary-200 border-neutral-40 stroke-neutral-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <div className="flex justify-between">
            <p className="px-2">1</p>
            <p className="px-2">2</p>
            <p className="px-2">3</p>
            <p className="px-2">...</p>
          </div>
          {/* chevron right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-6 cursor-pointer border dark:border-primary-200 rounded-sm dark:stroke-primary-200  border-neutral-40 stroke-neutral-40"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </article>
    );
};
export default MarketPagination;