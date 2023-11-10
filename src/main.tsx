import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import routes from "@/router/routes.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={routes} />
      <Toaster />
    <App />
  </React.StrictMode>,
)
