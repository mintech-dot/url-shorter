import PropTypes from "prop-types";
const InputField = ({ label, type, id, placeholder, required , disabled , value}) => {
  return (
    <div className="pb-2">
      <label className="text-sm font-medium text-lite" htmlFor={id}>
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={id}
        value={value}
        className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg mt-2 mb-4"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string
};

export default InputField;
