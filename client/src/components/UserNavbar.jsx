import Button from "./ui/Button";
import dropdown from "../assets/icon/dropdown.svg";
import Input from "./ui/ShorterInput";
import { Link } from 'react-router-dom';
const UserNavbar = () => {
  return (
    <nav className="flex pt-6 px-[52px] bg-black/50">
      <div className="flex flex-1 pt-[7px]">
        <Link to="/">
        <h1 className=" text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
          Linkly
        </h1>{" "}
        </Link>
        <h1 className="text-lite">®</h1>
      </div>
      <div>
        <Input />
      </div>
      <div className="flex flex-1 justify-end items-end mb-[7px]">
        <Link to="/dashboard/profile">
        <Button variant="dark" size="large">
          Raid Sobhi
          <img src={dropdown} alt="login icon" />
        </Button>
        </Link>
      </div>
    </nav>
  );
};

export default UserNavbar;
