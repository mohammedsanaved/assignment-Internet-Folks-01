import { Button } from "@chakra-ui/react";
import ContactSection from "./ContactSection";
import ExploreNow from "../UI/Button";
import LatestArticlesSection from "./LatestArticle";

const LandingPage = () => {
  return (
    <div className="relative w-full h-[3527px] text-left text-3xl text-primary font-source-sans-pro">
      <section className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[804px]" />
      <img
        className="absolute top-[33px] left-[100px] w-[107px] h-[83px] object-cover"
        alt=""
        src="/screenshot-669-1@2x.png"
      />
      <section className="absolute top-[803px] left-[0px] bg-white w-[1440px] h-[653px]" />
      <section className="absolute top-[989px] left-[0px] [background:linear-gradient(90.07deg,_rgba(30,_42,_93,_0.04),_rgba(48,_62,_130,_0.04)_55.51%,_rgba(60,_80,_157,_0.04))] w-[1440px] h-[467px]" />
      <div className="absolute top-[calc(50%_-_1758.5px)] left-[calc(50%_-_15px)] w-[735px] h-[804px]">
        <img
          className="absolute top-[calc(50%_-_402px)] left-[calc(50%_-_367.5px)] rounded-t-none rounded-br-none rounded-bl-[198.9px] w-[735px] h-[804px] object-cover"
          alt=""
          src="/rectangle-400@2x.png"
        />
      </div>
      <ContactSection />
      <ExploreNow />
      <h1 className="m-0 absolute top-[227px] left-[100px] text-[62px] leading-[69px] font-bold font-inherit inline-block w-[345px]">
        <p className="m-0">{`Discover the `}</p>
        <p className="m-0">
          <span className="text-crimson">Best</span>
          <span> Food and Drinks</span>
        </p>
      </h1>
      <div className="absolute top-[460px] left-[100px] text-[16.44px] leading-[27.41px] font-open-sans text-body inline-block w-[345px]">{`Naturally made Healthcare Products for the better care & support of your body.`}</div>
      <div className="absolute top-[989px] left-[205px] w-96 h-[468px]">
        <div className="absolute top-[0px] left-[0px] w-96 h-[468px]">
          <img
            className="absolute top-[0px] left-[0px] w-96 h-[468px] object-cover"
            alt=""
            src="/pharmasictservingcustomerdrugstore-1@2x.png"
          />
        </div>
        <img
          className="absolute top-[1377.6px] left-[258.4px] w-[47px] h-[25.7px]"
          alt=""
          src="/rectangle-407.svg"
        />
      </div>
      <section className="absolute top-[1456px] left-[0px] w-[1440px] h-[995px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[995px]" />
      </section>
      <img
        className="absolute top-[2574px] left-[104px] w-[161px] h-[125px] object-cover"
        alt=""
        src="/screenshot-669-2@2x.png"
      />
      <img
        className="absolute top-[0px] left-[688px] w-[752px] h-[839px]"
        alt=""
        src="/vector-1.svg"
      />
      <Button
        className="absolute top-[32px] left-[1277px]"
        variant="solid"
        w="122px"
        colorScheme="teal"
      >
        Get In Touch
      </Button>
      <img
        className="absolute top-[162.7px] left-[1215.5px] w-[115.1px] h-[76.8px] hidden"
        alt=""
        src="/vector-2.svg"
      />
      <LatestArticlesSection
        imageAltText="/grilledtomatoes1846x846-1@2x.png"
        recipeTitle="Grilled  Tomatoes at Home"
        snackImageUrl="Snacks for Travel"
        imageDimensions="/mealprepideas846x846-1@2x.png"
        recipeImageUrl="Post-workout Recipes"
        imageDimensionsAltText="/mealprepideas846x846-11@2x.png"
      />
      <div className="absolute top-[1096px] left-[789px] w-[447px] h-[254px] flex flex-col items-start justify-start gap-[21px] text-[45px] font-poppins">
        <div className="w-[447px] h-48 flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[27.41px]">
            <h1 className="m-0 relative text-inherit leading-[27px] font-semibold font-inherit inline-block w-[422px] h-[26px] shrink-0">
              About Us
            </h1>
            <div className="relative text-mini leading-[27px] font-open-sans text-body inline-block w-[447px] h-[138px] shrink-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </div>
          </div>
        </div>
        <Button variant="solid" w="132px" colorScheme="teal">
          Read More
        </Button>
      </div>
      <div className="absolute top-[2358px] left-[705px] leading-[27.22px] text-darkslategray">
        1/2
      </div>
      <div className="absolute h-[0.82%] w-[1.94%] top-[66.83%] right-[52.01%] bottom-[32.35%] left-[46.04%]">
        <img
          className="absolute h-[55.17%] w-[35.71%] top-[24.14%] right-[32.14%] bottom-[20.69%] left-[32.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/image-1-traced.svg"
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gainsboro-200 box-border w-7 h-[29px] border-[1px] border-solid border-darkgray-100" />
      </div>
      <img
        className="absolute h-[0.82%] w-[1.94%] top-[66.83%] right-[46.04%] bottom-[32.35%] left-[52.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-323.svg"
      />
      <section className="absolute top-[1457px] left-[1440px] bg-white w-[1440px] h-[994px]" />
      <div className="absolute top-[2359px] left-[2145px] leading-[27.22px] text-darkslategray">
        2/2
      </div>
      <div className="absolute h-[0.82%] w-[1.94%] top-[66.86%] right-[-47.99%] bottom-[32.32%] left-[146.04%]">
        <img
          className="absolute h-[55.17%] w-[35.71%] top-[24.14%] right-[32.14%] bottom-[20.69%] left-[32.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/image-1-traced1.svg"
        />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gainsboro-200 box-border w-7 h-[29px] border-[1px] border-solid border-darkslategray" />
      </div>
      <img
        className="absolute h-[0.82%] w-[1.94%] top-[66.86%] right-[-53.96%] bottom-[32.32%] left-[152.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-325.svg"
      />
      <LatestArticlesSection
        imageAltText="/grilledtomatoes1846x846-11@2x.png"
        recipeTitle="How To Grill Corn"
        snackImageUrl="Crunchwrap Supreme"
        imageDimensions="/mealprepideas846x846-12@2x.png"
        recipeImageUrl="Broccoli Cheese Soup"
        imageDimensionsAltText="/mealprepideas846x846-13@2x.png"
        propLeft="1554px"
      />
    </div>
  );
};

export default LandingPage;
