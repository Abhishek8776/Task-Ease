import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='flex justify-center mt-6'>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
