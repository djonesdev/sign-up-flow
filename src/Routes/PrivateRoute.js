import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      false === true
        ? <Component {...props} />
        : <Redirect to='/Auth-Redirect' />
    )} />
  )

export default PrivateRoute
