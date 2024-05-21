import Market from "../../Components/Market";
import {
  MarketPagination,
  MarketCap,
  MarketList,
} from "../../Components/Market";

function MarketPlace(){
    return (
      <section className="md:flex space-y-4 gap-4">
        <article>
          <MarketCap />
          <Market />
          <MarketPagination />
        </article>
        <article>
          <MarketList />
        </article>
      </section>
    );
};

export default MarketPlace;