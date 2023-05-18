import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Provider from './contextAPI/Context.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
