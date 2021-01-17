import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
        console.log(props, 'props')
      return (props.isAuthenticated !== null) === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/Auth-Redirect" />
      );
    }}
  />
);

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateRoute);
