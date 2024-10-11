import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
