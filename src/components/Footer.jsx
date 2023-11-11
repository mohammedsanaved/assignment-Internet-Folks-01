import footerLogo from "../assets/logo.png";
import insta from "../assets/component01.svg";
import twitter from "../assets/component02.svg";
import fb from "../assets/component03.svg";

const Footer = () => {
  return (
    <div className="sm:flex sm:justify-around bg-slate-100 sm:p-5 sm:mt-7 px-12">
      <div className="p-8 flex justify-center items-center">
        <img
          src={footerLogo}
          alt="footerLogo"
          className="sm:w-[140px] w-[75px] h-auto items-center"
        />
      </div>
      <div>
        <div className="text-xl font-semibold mt-7 text-[#0e2368]">Contact</div>
        <div className="font-light text-sm">
          <div className="mt-3">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road,
            <br /> Phartosh Gate near YTM Market, XYZ-343434
          </div>
          <div className="mt-3">www.example.com</div>
          <div className="mt-3">(990-201-2001)</div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-xl font-semibold text-[#0e2368]">Menu</div>
        <div className="text-sm font-light mt-6">
          <div className="mt-1">About Us</div>
          <div className="mt-1">Products</div>
          <div className="mt-1">Carrers</div>
          <div className="mt-1">Contact Us</div>
        </div>
      </div>
      <div className="mt-8 pb-5">
        <div className="text-xl font-semibold hidden sm:block text-[#0e2368]">
          Social Links
        </div>
        <div className="sm:items-start flex flex-col justify-center items-center">
          <div className="flex gap-4 mt-4">
            <img src={insta} alt="insta" />
            <img src={twitter} alt="twitter" />
            <img src={fb} alt="fb" />
          </div>
          <div className="sm:mt-14 mt-2 font-light text-sm">
            © 2022 Food Truck Example
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
