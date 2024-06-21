import {useEffect, useState, useRef } from 'react';
import copy from '../../assets/icon/copy.svg';
import PropTypes from 'prop-types';

const CopyTextButton = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000); // Hide tooltip after 1 seconds
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative" ref={buttonRef}>
      <img
        src={copy}
        alt="copy icon"
        className="cursor-pointer mx-4"
        onClick={handleCopy}
      />
      {showTooltip && (
        <div className="absolute z-10 p-2 mt-2 text-sm text-white bg-black rounded shadow-lg">
          Copied!
        </div>
      )}
    </div>
  );
};

CopyTextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyTextButton;
