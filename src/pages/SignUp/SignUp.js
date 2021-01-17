import React from "react";
import moment from "moment";

import FormInput from "../../components/Inputs/FormInput";
import Card from "../../components/Card/Card";
import companyLogo from "../../assets/icons/logo.png";
import "./SignUp.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import DateInput from "../../components/Inputs/DateInput";
import Button from "../../components/Button/Button";
import InputWithSelect from "../../components/Inputs/InputWithSelect";

function SignUp({
  onClickCheckbox,
  submitForm,
  formState,
  handleInputChange,
  handleSelectChange,
}) {
  return (
    <div className="c-sign-up-form">
      <Card>
        <img
          alt="onaro logo"
          className="c-sign-up-form__logo"
          src={companyLogo}
        />
        <p className="c-sign-up-form__subtitle">Connect With Email</p>
        <FormInput
          placeholder="First Name"
          handleOnChange={(e) => handleInputChange("firstName", e)}
          value={formState.firstName}
        />
        <FormInput
          placeholder="Surname"
          handleOnChange={(e) => handleInputChange("surname", e)}
          value={formState.surname}
        />
        <DateInput
          onChange={(e) => handleInputChange("dob", e)}
          value={formState.dob}
          placeholder={moment().format("DD/MM/YY")}
        />

        <InputWithSelect
          placeholder="Gender"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Prefer Not To Specify", label: "Prefer Not To Specify" },
          ]}
          onSelectOption={handleSelectChange}
        />
        <FormInput
          placeholder="Email"
          handleOnChange={(e) => handleInputChange("email", e)}
          value={formState.email}
        />
        <div className="c-sign-up-form__nomination-container">
          <p>Do you wish for us to be your nominated Pharmacy?</p>
          <div className="c-sign-up-form__checkbox-container">
            <Checkbox
              label="Yes"
              onChange={() => onClickCheckbox(true)}
              checked={formState.trackAndTrace}
            />
            <Checkbox
              label="No"
              onChange={() => onClickCheckbox(false)}
              checked={!formState.trackAndTrace}
            />
          </div>
        </div>
        <div className="c-sign-up-form__button-container">
          <Button
            type="primary"
            disabled={
              !formState.firstName &&
              !formState.surname &&
              !formState.email &&
              formState.gender
            }
            label="Save"
            onClick={submitForm}
          />
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
