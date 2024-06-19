import Button from "./ui/Button";
import exit from "../assets/icon/exit.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex pt-6 xl:px-[52px] px-[26px] md:px-[52px]">
      <div className="flex flex-1">
        <Link to="/">
          <h1 className="text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
            Linkly
          </h1>{" "}
        </Link>
        <h1 className="text-lite">®</h1>
      </div>
      <div className="flex flex-1 justify-end items-end md:gap-[20px]">
        <Link to="/login">
          <Button variant="dark" size="large">
            Login
            <img src={exit} alt="login icon" />
          </Button>
        </Link>
        <div className="hidden md:block">
          <Link to="/register">
            <Button variant="primary" size="large">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
