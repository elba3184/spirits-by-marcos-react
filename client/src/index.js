import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/general/App.jsx'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();
