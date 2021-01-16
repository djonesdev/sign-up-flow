import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import SignUpContainer from '../pages/SignUp/SignUp.page'
import ConfirmationContainer from '../pages/Confirmation/Confirmation.page'
import { HomepageContainer } from '../pages/Homepage/Homepage.page'
import NotFound from '../pages/NotFound/NotFound'
import SignUpError from '../pages/SignUpError/SignUpError'
import PrivateRoute from './PrivateRoute'
import AuthRedirect from '../pages/AuthRedirect/AuthRedirect'

export const Routing = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>   
        <Switch>
          <Route exact path="/" component={SignUpContainer} />
          <PrivateRoute exact path="/Confirmation" component={ConfirmationContainer} />
          <PrivateRoute exact path="/Homepage" component={HomepageContainer} />
          <Route exact path="/Auth-Redirect" component={AuthRedirect} />
          <Route exact path="/SignUpError" component={SignUpError} />
          <Route component={NotFound} />
        </Switch>  
      </div>
    </Router>
  </Provider>
)