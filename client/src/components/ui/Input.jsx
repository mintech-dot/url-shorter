import Button from "./Button";
import link from "../../assets/icon/link.svg";
const Input = () => {
  return (
    <div className="flex flex-1 border-4 rounded-[48px] bg-grey border-[#353C4A] p-[4px] ">
      <img src={link} alt="link icon" className="pl-5" />
      <input
        type="text"
        className="bg-grey focus:outline-none focus:ring-0 w-[450px] hover:border-transparent py-[18px] placeholder:text-[#C9CED6] font-light text-lite placeholder:font-light px-[20px]"
        placeholder="Enter the link here"
      />
      <Button variant="primary">Shorten Now!</Button>
    </div>
  );
};

export default Input;
