import React from "react";
import Select from "react-select";

import FormInput from "./FormInput";
import "./InputWithSelect.scss";

function InputWithSelect({ options, placeholder, onSelectOption }) {
  const customStyles = {
    container: (providedStyles) => ({
      ...providedStyles,
      width: "43%",
      marginTop: "auto",
      border: 0,
    }),
    control: (providedStyles) => ({
      ...providedStyles,
      border: 0,
      boxShadow: "none",
    }),
  };
  return (
    <div className="c-input-with-select">
      <FormInput
        disabled
        classNames="c-input-with-select__input"
        placeholder={placeholder}
        handleOnChange={() => null}
      />
      <Select
        options={options}
        onChange={onSelectOption}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={customStyles}
      />
    </div>
  );
}

export default InputWithSelect;
