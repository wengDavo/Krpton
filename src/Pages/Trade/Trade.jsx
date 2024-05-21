import CryptoSearch from "../../Components/CryptoSearch";
import CryptoDetailed from "../../Components/CryptoDetailed";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { useGlobalContext } from "../../App";

function Trade() {
  const { theme, handleTheme } = useGlobalContext();
  return (
    <section className="space-y-4 md:flex md:gap-4 md:space-y-0">
      <article className="space-y-4 md:order-2">
        <CryptoSearch />
        <CryptoDetailed />
      </article>
      <article className="h-[500px] md:w-full md:order-1">
        {theme == "light" ? (
          <TradingViewWidget
            symbol="NASDAQ:AAPL"
            autosize
            theme={Themes.LIGHT}
          />
        ) : (
          <TradingViewWidget
            symbol="NASDAQ:AAPL"
            autosize
            theme={Themes.DARK}
          />
        )}
      </article>
    </section>
  );
}

export default Trade;
