import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { useHistory } from 'react-router-dom';

import './index.css'
import { Routing } from './Routes/routes'
import store from './store'

const browserHistory = useHistory

// const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Routing store={store} />,
  document.getElementById('root')
);