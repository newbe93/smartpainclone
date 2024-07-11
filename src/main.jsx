import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, RouterProvider } from 'react-router-dom'
import root from '/src/root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
    <RouterProvider router={root} />
  </React.StrictMode>
)