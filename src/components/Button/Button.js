import React from 'react'
import './Button.scss'

function Button({ type, onClick, label, disabled }) {
    return (
        <button disabled={disabled} className={`c-button c-button__${type} c-button__${disabled ? 'is-diabled' : ''}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
