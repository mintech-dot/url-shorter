import Button from "./Button";
import link from "../../assets/icon/link.svg";
const Input = () => {
  return (
    <div className="flex flex-1 border-4 rounded-[48px] bg-grey border-[#353C4A] p-[4px] ">
      <img src={link} alt="link icon" className="pl-5" />
      <input
        type="text"
        className="bg-grey rounded-[48px] w-[600px] py-[18px] placeholder:text-[#C9CED6] font-light placeholder:font-light px-[20px]"
        placeholder="Enter the link here"
      />
      <Button variant="primary">Shorten Now!</Button>
    </div>
  );
};

export default Input;
