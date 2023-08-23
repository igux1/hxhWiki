import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx';
import Characters from './routes/Characters.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import CharactersDetails from './routes/CharactersDetails.jsx'

const basename = `/hxhWiki/`;

const router = createBrowserRouter([
  {
    path: basename,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: basename,
        element: <Home />,
      },
      {
        path: basename + "characters",
        element: <Characters />,
      },
      // nested routes
      {
        path: basename + "characters/:id",
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
