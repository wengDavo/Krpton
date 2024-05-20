import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import { Home } from "./Pages";

function App() {
  return (
    <section className="p-4 text-abs-black dark:text-abs-white dark:bg-abs-dark space-y-6 md:space-y-20">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <Footer />
    </section>
  );
}

export default App;
