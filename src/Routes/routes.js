import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import SignUpContainer from '../pages/SignUp/SignUp.page'
import ConfirmationContainer from '../pages/Confirmation/Confirmation.page'
import { HomepageContainer } from '../pages/Homepage/Homepage.page'
import NotFound from '../pages/NotFound/NotFound'

export const Routing = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>   
        <Switch>
          <Route exact path="/" component={SignUpContainer} />
          <Route exact path="/Confirmation" component={ConfirmationContainer} />
          <Route exact path="/Homepage" component={HomepageContainer} />
          <Route component={NotFound} />
        </Switch>  
      </div>
    </Router>
  </Provider>
)