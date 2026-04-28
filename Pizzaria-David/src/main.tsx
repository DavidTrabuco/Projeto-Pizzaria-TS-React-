import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pizzaria from './Pizzaria'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Pizzaria />
    </BrowserRouter>
  </StrictMode>,
)
