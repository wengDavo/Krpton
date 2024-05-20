import Logo from "../../assets/icons/Logo.svg";
import fb from "../../assets/icons/facebook.svg";
import ig from "../../assets/icons/instagram.svg";
import yt from "../../assets/icons/youtube.svg";
import twitter from "../../assets/icons/twitter.svg";

function Footer() {
  return (
    <footer className="text-xs md:flex grid gap-4 md:justify-between">
      <article className="relative grid gap-2">
        <div className="blur-purple absolute z-[-10] bottom-0 dark:z-0 "></div>
        <p className="logo">Krypton</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          adjkahd ahkahdkahd
        </p>
        <p>+12 127917291729</p>
        <p>info@gmail.com</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          nam.
        </p>
      </article>
      <article className="grid gap-2 grid-cols-2">
        <div className="grid gap-2">
          <p className="text-sm font-bold">Products</p>
          <p>Inverse Perpetual</p>
          <p>USDT perpetual</p>
          <p>Exchange</p>
          <p>Launchpad</p>
          <p>Binance Pay</p>
        </div>
        <div className="grid gap-2">
          <p className="text-sm font-bold">Services</p>
          <p>Buy Crypto</p>
          <p>Markets</p>
          <p>Trading Fee</p>
          <p>Affilitae Program</p>
          <p>Referral Program</p>
          <p>API</p>
        </div>
      </article>
      <article className="grid gap-2 grid-cols-2">
        <div className="grid gap-2">
          <p className="text-sm font-bold">Support</p>
          <p>Bybit Learn</p>
          <p>Help Center</p>
          <p>User Feedback</p>
          <p>Submit a request</p>
          <p>API Document</p>
          <p>Trading Rules</p>
        </div>
        <div className="grid gap-2">
          <p className="text-sm font-bold">About Us</p>
          <p>About Bybit</p>
          <p>Authenticty Check</p>
          <p>Careers</p>
          <p>Business Contacts</p>
          <p>Blog</p>
        </div>
      </article>
      <article className="flex justify-between md:flex-col">
        <figure className="flex gap-2">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={yt} alt="" />
          <img src={twitter} alt="" />
        </figure>
        <p>Copyright @ 2023 Company</p>
      </article>
    </footer>
  );
}

export default Footer;
