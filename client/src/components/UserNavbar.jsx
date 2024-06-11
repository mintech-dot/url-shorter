import Button from "./ui/Button";
import dropdown from "../assets/icon/dropdown.svg";
import Input from "./ui/Input";
const UserNavbar = () => {
  return (
    <nav className="flex pt-6 px-[52px]">
      <div className="flex flex-1 pt-[7px]">
        <h1 className=" text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
          Linkly
        </h1>{" "}
        <h1 className="text-lite">®</h1>
      </div>
      <div >
      <Input />
      </div>
      <div className="flex flex-1 justify-end items-end mb-[7px]">
        <Button variant="dark" size="large">
          Raid Sobhi
          <img src={dropdown} alt="login icon" />
        </Button>
      </div>
    </nav>
  );
};

export default UserNavbar;
