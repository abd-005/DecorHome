import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import { router } from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* declarative mode */}
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
    </BrowserRouter> */}

    {/* Data mode */}

    <RouterProvider router={router}/>
  </StrictMode>,
)
