import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EcoProvider from './Context/EcoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <EcoProvider>
  <App />
</EcoProvider>,
)
