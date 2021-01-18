import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { registerUser } from "../../redux/actions";
import { selectUserInfo } from "../../redux/selectors";
import SignUp from "./SignUp";

function SignUpContainer({ registerUser, userInfo, state }) {
  const history = useHistory();
  const [formState, setFormState] = useState({
    firstName: "",
    surname: "",
    dob: "",
    gender: "",
    email: "",
    trackAndTrace: false, 
    password: 'Password123'
  });

  useEffect(() => { 
    if(userInfo.isAuthenticated) {
      history.push("/Confirmation");
    }
  }, [userInfo, history])

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
    console.log(userInfo.isAuthenticated, 'userInfo')
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

const mapStateToProps = state => ({
  userInfo: selectUserInfo(state),
});

const mapDispatchToProps = dispatch => ({
  registerUser: payload => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
