import Button from "../UI/Button";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5 z-10 sm:w-[95vw]">
      <div className="sm:block hidden">
        <img src={logo} alt="logo" className="h-12" />
      </div>
      <div>
        <Button type={"bgRed"}>Get in Touch</Button>
      </div>
    </div>
  );
};

export default Navbar;
