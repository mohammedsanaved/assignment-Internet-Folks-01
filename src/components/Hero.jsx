import Button from "../UI/Button";
import rectangle from "../assets/rectangle400.png";
import vector from "../assets/vector1.png";
// import Navbar from "./Navbar";
const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-between main-sm">
        <div className="sm:ml-14 sm:mt-40 mt-6">
          <div className="text-5xl font-bold tracking-wide text-[#0e2368] mt-10 sm:text-start text-center">
            Discover the
            <br />
            <span className="text-[#E23744]">Best</span> Food
            <br /> and Drinks
          </div>
          <div className="mt-6 text-sm font-extralight text-center sm:text-start">
            Naturally made Healthcare Products
            <br /> for the better care & support of your body.
          </div>
          <div className="mt-6 text-center sm:text-start ">
            <Button type="bgRed">Explore More</Button>
          </div>
        </div>
        <div className="relative sm:w-1/2 sm:mt-0">
          <img src={rectangle} alt="" />
          <div className="absolute top-0">
            <img src={vector} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
