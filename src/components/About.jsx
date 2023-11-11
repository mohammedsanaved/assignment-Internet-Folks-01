import Button from "../UI/Button";
import about from "../assets/about_girl(lp).png";

const About = () => {
  return (
    <div className="flex justify-around mt-[70px] bg-slate-100 pb-[20px]">
      <div className="hidden sm:block h-full">
        <img src={about} alt="about" className="" />
      </div>
      <div className="mt-14 block px-5 sm:ml-10">
        <div className="text-5xl font-semibold text-[#0e2368] text-center sm:text-start">
          About Us
        </div>
        <div className="mt-10 text-center sm:text-start tracking-widest">
          Lorem Ipsum is simply
          <br />
          dummy text of the printing and typesetting industry <br />
          Lorem Ipsum is simply dummy text of <br />
          the printing and typesetting industry and typesetting industry
        </div>
        {/* <div>Matter</div> */}
        <div className="text-center mt-5 sm:text-start">
          <Button type={"bgRed"}>Read More!</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
