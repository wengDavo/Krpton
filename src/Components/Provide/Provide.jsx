import solidCheck from "../../assets/icons/solidCheck.svg";
import laptopCoins from "../../assets/images/laptopCoins.svg";

function Provide() {
  return (
    <section className="grid gap-4 text-left md:grid-cols-2">
      <article className="grid gap-4 md:w-[80%]">
        <h3>What We Provide</h3>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in fugit
          iure non cupiditate repudiandae aliquam alias sunt id labore.
        </p>
        <div className="grid gap-2">
          <figure className="flex gap-2">
            <img src={solidCheck} alt="" />
            <figcaption className="font-medium">
              View real-time cryptocurrency prices
            </figcaption>
          </figure>
          <p className="text-xs">
            Experience A Variety Of Trading On Bitcost. You Can Use Various
            Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P,
            Staking, Mining, And Margin.
          </p>
        </div>
        <div className="grid gap-2">
          <figure className="flex gap-2">
            <img src={solidCheck} alt="" />
            <figcaption className="font-medium">
              Buy and sell BTC, ETH, XRP, OKB, Etc...
            </figcaption>
          </figure>
          <p className="text-xs">
            Experience A Variety Of Trading On Bitcost. You Can Use Various
            Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P,
            Staking, Mining, And Margin.
          </p>
        </div>
        <button className="border border-primary p-2 rounded-[20px] text-xs w-[154px]">
          Explore More
        </button>
      </article>
      <article>
        <figure className="p-4">
          <img src={laptopCoins} alt="" />
        </figure>
      </article>
    </section>
  );
}

export default Provide;
