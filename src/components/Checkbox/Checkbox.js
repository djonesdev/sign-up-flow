import React from "react";
import "./Checkbox.scss"

function Checkbox({ label, checked, onChange, value }) {
  return (
    <div className="c-checkbox__container">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        className="c-checkbox__box"
        onChange={onChange}
      />
      <p className="c-checkbox__label">{label}</p>
    </div>
  );
}

export default Checkbox;
