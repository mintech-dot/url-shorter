import PropTypes from "prop-types";

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  children,
}) => {
  let className =
    " font-inter text-center font-semibold rounded-[48px] text-[#ffffff] w-full sm:w-fit ";

  switch (variant) {
    case "primary":
      className +=
        "md:px-9 text-white hidden md:block bg-brand-primary-blue shadow-lg shadow-brand-primary-blue/30 ";
      break;
    case "dark":
      className +=
        "flex gap-[10px] px-4 md:px-6 text-white bg-grey border border-[#353C4A] ";
      break;
    default:
      className +=
        "md:px-9 text-white bg-brand-primary-blue shadow-lg shadow-brand-primary-blue/30";
  }

  switch (size) {
    case "medium":
      className += "py-3 px-5";
      break;
    case "large":
      className += " py-[18px] ";
      break;

    default:
      className += "  py-3 px-5 ";
  }

  switch (type) {
    case "submit":
      className += " ";
      break;
    case "reset":
      className += " ";
      break;
    default:
      className += " ";
  }

  return <button className={className}>{children}</button>;
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "dark"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node.isRequired,
};

export default Button;
