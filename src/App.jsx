import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home, MarketPlace, Trade, Register, Login, Wallet } from "./Pages";

import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function App() {
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
    <GlobalContext.Provider value={{ theme, handleTheme }}>
      <section className="p-4 text-abs-black dark:text-abs-white dark:bg-abs-dark space-y-6 md:space-y-20">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/market" element={<MarketPlace />}></Route>
            <Route path="/trade" element={<Trade />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path="/wallet" element={<Wallet />}></Route> */}
          </Routes>
        </main>
        <Footer />
      </section>
    </GlobalContext.Provider>
  );
}

export default App;
