import Market from "../../Components/Market";
import { MarketPagination } from "../../Components/Market";
import MarketCap from "../../Components/MarketCap";
import CryptoSearch from "../../Components/CryptoSearch";

function MarketPlace() {
  return (
    <section className="md:flex space-y-4 md:space-y-0">
      <article className="">
        <MarketCap />
        <Market />
        <MarketPagination />
      </article>
      <article className="">
        <CryptoSearch />
      </article>
    </section>
  );
}

export default MarketPlace;
