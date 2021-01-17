import React from "react"
import InputMask from "react-input-mask"
import "./FormInput.scss"
import "./DateInput.scss"

function DateInput({ onChange, value, placeholder }) {
  return (
    <div className="c-date-input">
      <span>
        <p className="c-date-input__prefix">DOB</p>
      </span>
      <InputMask
        className="c-form-input c-date-input__input"
        mask="99/99/99"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />{" "}
    </div>
  );
}

export default DateInput;
