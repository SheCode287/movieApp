import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'
import {Provider } from 'react-redux'
import store from './redux/Store.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <BrowserRouter>
    <Router/>
    {/* <App /> */}
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)