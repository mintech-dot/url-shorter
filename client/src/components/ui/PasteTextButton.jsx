import { useState, useRef } from "react";
import link from "../../assets/icon/link.svg";

const PasteTextButton = () => {
  const [pastedText, setPastedText] = useState("");
  const inputRef = useRef(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPastedText(text);
      if (inputRef.current) {
        inputRef.current.value = text;
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  return (
    <div className="relative">
      <button
        className="cursor-pointer mx-4 p-2 bg-blue-500 text-white rounded"
        onClick={handlePaste}
      >
        <img src={link} alt="link icon" className="pl-5 cursor-pointer" />
      </button>
      <input
        type="text"
        ref={inputRef}
        defaultValue={pastedText}
        className="border mt-2 p-2 w-full"
        placeholder="Pasted text will appear here"
      />
    </div>
  );
};

export default PasteTextButton;
