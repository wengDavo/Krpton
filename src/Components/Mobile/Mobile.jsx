import solidCheck from "../../assets/icons/solidCheck.svg";
import scanDownload from "../../assets/images/scanDownload.svg";
import google from "../../assets/images/googleStore.svg";
import apple from "../../assets/images/appleStore.svg";

function Mobile() {
  return (
    <section className="md:grid md:grid-cols-2 relative md:gap-2">
      <div className="absolute top-0 blur-green z-[-10] dark:z-0 right-0"></div>
      <article className="grid gap-y-2 md:order-2 md:h-[80%] md:my-auto">
        <h3>Free Your Money & Invest With Confident</h3>
        <p>
          With Krypton Trade, you can be sure your trading skills are matched
        </p>
        <div>
          <figure className="flex gap-2 ">
            <img src={solidCheck} alt="" />
            <figcaption>Buy, Sell, And Trade On The Go</figcaption>
          </figure>
          <p className="text-xs">
            Manage Your Holdings From Your Mobile Decive
          </p>
        </div>
        <div>
          <figure className="flex gap-2">
            <img src={solidCheck} alt="" />
            <figcaption>Take Control Of Your Wealth</figcaption>
          </figure>
          <p className="text-xs">
            Rest Assured You (And Only You) Have Access To Your Funds
          </p>
        </div>
        <figure className="flex gap-2 my-2">
          <img src={google} alt="google" className="h-7 cursor-pointer" />
          <img src={apple} alt="apple" className="h-7 cursor-pointer" />
        </figure>
      </article>
      <article className="order-1">
        <figure className="relative">
          <img src={scanDownload} alt="" />
          <figcaption className="absolute -left-2 top-7 border border-white-97 bg-white-99 p-1 px-2 shadow-md rounded-md  dark:bg-abs-dark dark:text-warning-300 dark:border-primary md:top-[70px] md:left-2">
            Scan To Download
          </figcaption>
        </figure>
      </article>
    </section>
  );
}

export default Mobile;
