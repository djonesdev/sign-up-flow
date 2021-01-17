import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { registerUser } from "../../redux/actions";
import SignUp from "./SignUp";

function SignUpContainer({ registerUser }) {
  const history = useHistory();
  const [formState, setFormState] = useState({
    firstName: "",
    surname: "",
    dob: "",
    gender: "",
    email: "",
    trackAndTrace: false
  });

  const handleInputChange = (inputName, e) => {
    setFormState({ ...formState, [inputName]: e.target.value });
    e.preventDefault();
  };

  const handleSelectChange = selectedOption => {
    setFormState({...formState, gender: selectedOption.value})
  }

  const onClickCheckbox = isOptedIn => {
    setFormState({...formState, trackAndTrace: isOptedIn})
  }

  const submitForm = () => {
    registerUser(formState);
    history.push("/Confirmation");
  };

  return (
    <SignUp
      submitForm={submitForm}
      formState={formState}
      handleInputChange={handleInputChange}
      onClickCheckbox={onClickCheckbox}
      handleSelectChange={handleSelectChange}
    />
  );
}

const mapStateToProps = (state) => ({
  value: state,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: payload => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
