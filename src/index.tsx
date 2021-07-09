import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route} from 'react-router'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/"component={ App} />  
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

