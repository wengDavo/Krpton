import { NavLink } from "react-router-dom";

function MobileNavBar() {
  return (
    <div className="bg-white-99 fixed top-16 left-2 right-2 rounded-reg z-50 dark:bg-abs-dark p-4 space-y-4">
      <article className="border-b pb-4">
        <menu className="space-y-4">
          <li className="flex gap-x-1">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6 bolt"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            <NavLink to="/market">Market</NavLink>
          </li>
          <li className="flex gap-x-1">
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
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
              />
            </svg>
            <NavLink to="/trade">Trade</NavLink>
          </li>
          <li className="flex gap-x-1">
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
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>

            {/* <NavLink to="/wallet">Wallet</NavLink> */}
            <p>Wallet</p>
          </li>
        </menu>
      </article>
      <article className="flex gap-x-2">
        <div>Currencies</div>
        <p>|</p>
        <select
          name="card"
          id="cars"
          className="bg-abs-white dark:bg-abs-dark cursor-pointer"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ngn">NGN</option>
          <option value="jpy">JPY</option>
        </select>
      </article>
    </div>
  );
}
export default MobileNavBar;
