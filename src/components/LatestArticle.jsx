import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Article from "./Article";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { latestArticle } from "../constants/latestArticle";

const LatestArticle = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const Pagination = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="flex gap-3 items-center justify-center my-16 md:my-0">
        <button
          className={`rounded py-[1.5px] px-[2px] bg-slate-300 text-stone-800
           disabled:bg-gray-200 disabled:text-gray-500`}
          onClick={() => previous()}
        >
          <IoIosArrowBack />
        </button>

        {/* <span className="font-bold">{currentSlide + 1}</span> */}

        <button
          className={`rounded py-[1.5px] px-[2px] bg-slate-300 text-stone-800
          disabled:bg-gray-200 disabled:text-gray-500`}
          onClick={() => next()}
        >
          <IoIosArrowForward />
        </button>
      </div>
    );
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-4xl font-semibold sm:text-start text-center text-[#0e2368] tracking-[0.04em] leading-[42px] sm:ml-12">
        Latest Article
      </div>
      <div
        className="mt-8 text-center mx-6
      "
      >
        <Carousel
          responsive={responsive}
          arrows={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<Pagination />}
          infinite
        >
          {latestArticle.map(
            (item) => (
              <Article key={item.title} item={item} />
              // <img src={item.image} key={item.title} alt="" />
            )
            // console.log(item)
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestArticle;
