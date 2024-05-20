import Hero from "../../Components/Hero";
import Market from "../../Components/Market";
import Works from "../../Components/Works";
import Provide from "../../Components/Provide";
import Mobile from "../../Components/Mobile";
import Customer from "../../Components/Customer/Customer";

function Home() {
  return (
    <section className="space-y-4 md:px-20">
      <Hero />
      <Market />
      <Works />
      <Provide />
      <Mobile />
      <Customer />
    </section>
  );
}

export default Home;
