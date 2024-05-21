import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

import { Home, MarketPlace } from "./Pages";

function App() {
  return (
    <section className="p-4 text-abs-black dark:text-abs-white dark:bg-abs-dark space-y-6 md:space-y-20">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/market" element={<MarketPlace />}></Route>
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
