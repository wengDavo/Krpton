import Market from "../../Components/Market";
import { MarketPagination} from "../../Components/Market";
import MarketCap from "../../Components/MarketCap";
import CryptoSearch from "../../Components/CryptoSearch";

function MarketPlace(){
    return (
      <section className="md:flex space-y-4 gap-4">
        <article>
          <MarketCap />
          <Market />
          <MarketPagination />
        </article>
        <article>
          <CryptoSearch />
        </article>
      </section>
    );
};

export default MarketPlace;