import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as service from './service'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  //<React.StrictMode>
 //   <App />
 // </React.StrictMode>,
 <>
    <GlobalStyles /> <App />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

service.unregister()
