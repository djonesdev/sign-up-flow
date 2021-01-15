import React from "react"
import InputMask from "react-input-mask";
import './FormInput.scss'

function DateInput({ onChange, value, placeholder }) {
  return <InputMask className="c-form-input" mask="99/99/99" placeholder={placeholder} onChange={onChange} value={value} />
}

export default DateInput 