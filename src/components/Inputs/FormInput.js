import React from 'react'

import './FormInput.scss'

function FormInput({ value, handleOnChange, placeholder }) {
    return <input className="c-form-input" placeholder={placeholder} onChange={handleOnChange} value={value} />
}

export default FormInput
