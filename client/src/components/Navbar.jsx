import Button from "./ui/Button";
import exit from "../assets/icon/exit.svg";
const Navbar = () => {
  return (
    <nav className="flex pt-6 px-[52px]">
      <div className="flex flex-1">
        <h1 className="text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
          Linkly
        </h1>{" "}
        <h1 className="text-lite">®</h1>
      </div>
      <div className="flex flex-1 justify-end items-end md:gap-[20px]">
        <Button variant="dark" size="large">
          Login
          <img src={exit} alt="login icon" />
        </Button>
        <Button variant="primary" size="large">
          Register Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
