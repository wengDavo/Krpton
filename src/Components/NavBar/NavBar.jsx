import { useState, useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import userProfile from "../../assets/icons/userProfile.svg";

function NavBar() {
  const [toggle, handleToggle] = useToggle(false);
  const [theme, setTheme] = useState("light");
  const handleTheme = () => setTheme(theme == "light" ? "dark" : "light");
  useEffect(() => {
    if (theme == "dark" || localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (theme == "light" || localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <section className="flex font-medium justify-between items-center gap-4">
      <p className="logo">Krypton</p>
      <article className="hidden md:flex md:mr-auto">
        <menu className="flex *:ml-4">
          <li>Markets</li>
          <li>Watchlist</li>
          <li>Portfolio</li>
          <li>Learn</li>
        </menu>
      </article>
      <article className="hidden md:flex gap-4">
        <div>Currencies</div>
        <select name="card" id="cars" className="bg-abs-white dark:bg-abs-dark">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ngn">NGN</option>
          <option value="jpy">JPY</option>
        </select>
      </article>
      <article className="flex relative">
        <figure
          onClick={handleTheme}
          className="cursor-pointer self-center mr-4"
        >
          {theme == "light" ? (
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
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
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
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </figure>
        <figure className="cursor-pointer">
          <img src={userProfile} alt="" onClick={handleToggle} />
        </figure>
        {toggle && (
          <div className="absolute -bottom-20 shadow-md p-3 divide-y-[1px] z-10 bg-abs-white divide-white-90 dark:bg-abs-black rounded-sm">
            <p>Profile</p>
            <p>Logout</p>
          </div>
        )}
      </article>
    </section>
  );
}

export default NavBar;
