import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import GifApp from './GifApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifApp />
  </StrictMode>,
)
