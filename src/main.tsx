import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'

import 'normalize.css'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
