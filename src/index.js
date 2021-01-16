import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { Routing } from './Routes/routes'
import store from './store'

ReactDOM.render(
  <Routing store={store} />,
  document.getElementById('root')
);