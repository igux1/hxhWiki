import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx';
import Characters from './routes/Characters.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import CharactersDetails from './routes/CharactersDetails.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      // nested routes
      {
        path:"/characters/:id",
        element: <CharactersDetails />,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
