import component01 from "../assets/component01.svg";
import component02 from "../assets/component02.svg";
import component03 from "../assets/component03.svg";

const ContactSection = () => {
  return (
    <section className="absolute top-[2451px] left-[1px] w-[1440px] h-[362px] text-left text-[18.84px] text-base font-sans">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[362px]">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1440px] h-[362px]" />
        <div className="absolute top-[84px] left-[474px] w-[232px] h-[186px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.03em] leading-[27.22px] font-semibold inline-block w-[94px] h-[27px]">
            Contact Us
          </div>
          <div className="absolute top-[41px] left-[0px] w-[232px] h-[145px] text-[14.66px] text-md">
            <div className="absolute top-[0px] left-[1px] leading-[23.03px] inline-block w-[217px] h-[69px]">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div className="absolute top-[84px] left-[0px] leading-[23.03px] inline-block w-[232px] h-[23px]">
              example2020@gmail.com
            </div>
            <div className="absolute top-[122px] left-[0px] leading-[23.03px] text-center inline-block w-[91px] h-[23px]">
              (904) 443-0343
            </div>
          </div>
        </div>
        <div className="absolute top-[84px] left-[898px] w-[438px] h-[186px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.03em] leading-[27.22px] font-semibold inline-block w-[43px] h-[27px]">
            More
          </div>
          <div className="absolute top-[0px] left-[309px] text-lgi tracking-[0.03em] leading-[27px] font-semibold inline-block w-[129px] h-[27px]">
            Social Links
          </div>
          <div className="absolute top-[41px] left-[0px] w-[153px] h-[145px] text-mini text-dimgray">
            <div className="absolute top-[40px] left-[0px] leading-[27px] inline-block w-[153px] h-[26px]">
              Products
            </div>
            <div className="absolute top-[80px] left-[0px] leading-[27px] inline-block w-[86px] h-[26px]">
              Career
            </div>
            <div className="absolute top-[119px] left-[0px] leading-[27px] inline-block w-[94px] h-[26px]">
              Contact Us
            </div>
            <div className="absolute top-[0px] left-[0px] text-[14.66px] leading-[27.22px] inline-block w-[75px] h-[26px]">
              About Us
            </div>
          </div>
        </div>
        <div className="absolute top-[245px] left-[1139px] w-[197px] h-[25px] text-center text-[14.66px] text-b9c font-roboto">
          <div className="absolute top-[0px] left-[0px] leading-[25.12px] inline-block w-[197px] h-[25px]">
            © 2022 Food Truck Example
          </div>
        </div>
      </div>
      <img
        className="absolute h-[5.8%] w-[1.46%] top-[33.7%] right-[7.15%] bottom-[60.5%] left-[91.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={component01}
      />
      <img
        className="absolute h-[5.6%] w-[4.79%] top-[33.07%] right-[9.44%] bottom-[60.87%] left-[85.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={component02}
      />
      <img
        className="absolute h-[5.8%] w-[1.46%] top-[33.7%] right-[14.72%] bottom-[60.5%] left-[83.82%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={component03}
      />
    </section>
  );
};

export default ContactSection;
