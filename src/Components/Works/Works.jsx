import coinCmp from "../../assets/images/coinComparison.svg";
import mining from "../../assets/images/mining.svg";
import coinWallet from "../../assets/images/coinWallet.svg";
import cloud from "../../assets/icons/cloud.svg";
import line4 from "../../assets/images/line4.svg";
import line5 from "../../assets/images/line5.svg";
import line6 from "../../assets/images/line6.svg";
import bitcoinBg from "../../assets/images/bitCoinLg.svg";

function Works() {
  return (
    <section className="relative ">
      <img
        src={bitcoinBg}
        alt=""
        className="z-10 absolute h-[500px] aspect-square right-0 -top-[100px]"
      />
      <article className="w-[80%] mx-auto text-center">
        <h3>How It Works</h3>
        <p className="text-xs md:w-[70%] md:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos
          veritatis error assumenda quam conse7uatur doloribus distinctio
          impedit. Itaque, non tempore? Doloribus possimus totam rem, sequi
          corporis odit quaerat mollitia.
        </p>
      </article>
      <article className="flex flex-col md:flex-row md:h-[250px]  text-center">
        <figure className="self-start z-20">
          <img src={cloud} alt="" />
          <p className="font-bold">Download</p>
          <figcaption className="text-[10px] hidden md:block">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks
            Built In React Native.
          </figcaption>
        </figure>
        <img src={line4} alt="" className="rotate-[30deg] md:rotate-12" />
        <figure className="self-end z-20">
          <img src={coinWallet} alt="" />
          <p className="font-bold">Connect Wallet</p>
          <figcaption className="text-[10px] hidden md:block">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks
            Built In React Native.
          </figcaption>
        </figure>
        <img src={line5} alt="" className="-rotate-[30deg] md:-rotate-12" />
        <figure className="z-20">
          <img src={mining} alt="" />
          <p className="font-bold">Start Trading</p>
          <figcaption className="text-[10px] hidden md:block">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks
            Built In React Native.
          </figcaption>
        </figure>
        <img src={line6} alt="" className="rotate-[30deg] md:rotate-12" />
        <figure className="self-end z-20">
          <img src={coinCmp} alt="" />
          <p className="font-bold">Earn Money</p>
          <figcaption className="text-[10px] hidden md:block">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks
            Built In React Native.
          </figcaption>
        </figure>
      </article>
    </section>
  );
}

export default Works;
