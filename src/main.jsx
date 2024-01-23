import React from 'react'
import ReactDOM from 'react-dom/client'
import { TTStateProvider } from './context'
import './scss/index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <TTStateProvider>
    <App />
  </TTStateProvider>
)
