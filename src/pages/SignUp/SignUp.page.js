import React from 'react'
import { connect } from "react-redux";

import { registerUser } from "../../redux/actions";
import SignUp from './SignUp'

function SignUpContainer({ registerUser }) {
    return <SignUp registerUser={registerUser}/>
}

const mapStateToProps = (state) => ({
    value: state,
});
  
const mapDispatchToProps = (dispatch) => ({
    registerUser: () => dispatch(registerUser()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
