import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { enableMocking } from './config/environment.js'

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

enableMocking()
  .then(renderApp)
  .catch(console.error)
