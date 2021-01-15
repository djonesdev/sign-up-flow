import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../App'
import SignUpContainer from '../pages/SignUp/SignUp.page'
import ConfirmationContainer from '../pages/Confirmation/Confirmation.page'

export const Routing = ({ store, location }) => (
  <Provider store={store}>
    <Router>
      <div>   
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/SignUp" component={SignUpContainer} />
          <Route exact path="/Confirmation" component={ConfirmationContainer} />
        </Switch>  
      </div>
    </Router>
  </Provider>
)