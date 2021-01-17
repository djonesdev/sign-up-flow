import React from 'react'

import './FormInput.scss'

function FormInput({ value, handleOnChange, placeholder, classNames }) {
    return <input className={`c-form-input ${classNames}`} placeholder={placeholder} onChange={handleOnChange} value={value} />
}

export default FormInput
