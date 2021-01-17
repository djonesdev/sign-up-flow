import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { autheticateUser } from "../../redux/actions";
import { selectUserInfo } from "../../redux/selectors";

import Confirmation from "./Confirmation";

export const ConfirmationContainer = ({ isAuthenticated, autheticateUser }) => {
  const history = useHistory();

  useEffect(() => {
    // if(isAuthenticated) {
        autheticateUser()
    // }
  }, [autheticateUser]);

  const onPressContinue = () => {
    history.push("/Homepage");
  };

  return <Confirmation onPressContinue={onPressContinue} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: selectUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  autheticateUser: () => dispatch(autheticateUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationContainer);
