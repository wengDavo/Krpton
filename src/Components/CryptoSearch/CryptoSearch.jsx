import CryptoSimple from "../CryptoSimple";
import { useState } from "react";

function CryptoSearch() {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <section className="p-2 space-y-4 border border-white-90 dark:border-neutral-900 ">
      <article>
        <form action="" className="flex justify-between">
          <label
            htmlFor=""
            className="flex bg-abs-white rounded-sm pl-1 dark:bg-abs-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="search"
              name=""
              id=""
              placeholder="Search by name"
              className="border-none outline-none pl-2 rounded-sm text-sm dark:bg-abs-dark"
              onClick={()=>setIsSearching(!isSearching)}
            />
          </label>
          <label htmlFor="">
            <input
              type="date"
              name=""
              id=""
              className="outline-none rounded-sm text-sm dark:bg-abs-dark"
            />
          </label>
        </form>
      </article>
      {isSearching && (
        <article className="text-sm space-y-2 max-h-[400px] overflow-scroll no-scrollbar">
          <CryptoSimple />
          <CryptoSimple />
          <CryptoSimple />
          <CryptoSimple />
          <CryptoSimple />
          <CryptoSimple />
          <CryptoSimple />
        </article>
      )}
    </section>
  );
}

export default CryptoSearch;
