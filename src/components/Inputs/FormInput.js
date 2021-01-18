import React from "react";

import "./FormInput.scss";

function FormInput({
  value,
  disabled,
  handleOnChange,
  placeholder,
  classNames,
}) {
  return (
    <input
      disabled={disabled}
      className={`c-form-input ${classNames}`}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
    />
  );
}

export default FormInput;
