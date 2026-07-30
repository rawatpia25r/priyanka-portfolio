import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ResumeViewer from './components/ResumeViewer.jsx'

const path = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/resume' ? <ResumeViewer /> : <App />}
  </StrictMode>,
)
