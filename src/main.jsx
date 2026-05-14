import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomeApp from './HomeApp.jsx'
// import './index.css'
// import CounterApp from './CounterApp.jsx'
import TodoListApp from './TodoListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
)
