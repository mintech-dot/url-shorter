import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import arrowright from "../../assets/icon/arrow-right.svg";
import link from "../../assets/icon/link.svg";
const Input = () => {
  const [buttonText, setButtonText] = useState("Shorten Now!");
  const inputRef = useRef(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (inputRef.current) {
        inputRef.current.value = text;
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setButtonText(<img src={arrowright} alt="arrow right icon" />);
      } else {
        setButtonText("Shorten Now!");
      }
    };

    // Set initial text based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-1 border-4 rounded-[48px] bg-grey border-[#353C4A] p-[4px] ">
      <img
        src={link}
        alt="link icon"
        className="pl-5 cursor-pointer"
        onClick={handlePaste}
      />
      <input
        type="text"
        ref={inputRef}
        className="bg-grey focus:outline-none focus:ring-0 w-[195px] md:w-[450px] hover:border-transparent py-[18px] placeholder:text-[#C9CED6] font-light text-lite placeholder:font-light px-[8px] md:px-[20px]"
        placeholder="Enter the link here"
      />
      <Button variant="primary">{buttonText}</Button>
    </div>
  );
};

export default Input;
