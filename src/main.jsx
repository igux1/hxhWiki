import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx';
import Characters from './routes/Characters.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import CharactersDetails from './routes/CharactersDetails.jsx'
import PhantomTroupe from './routes/PhantomTroupe.jsx'
import ZoldyckFamily from './routes/ZoldyckFamily.jsx'
import Nen from './routes/Nen.jsx'
import Ten from './routes/Ten.jsx'
import Zetsu from './routes/Zetsu.jsx'
import Ren from './routes/Ren.jsx'
import Emission from './routes/Emission.jsx'
import Transmutation from './routes/Transmutation.jsx'
import Manipulation from './routes/Manipulation.jsx'
import Enhancement from './routes/Enhancement.jsx'
import Conjuration from './routes/Conjuration.jsx'
import Specialization from './routes/Specialization.jsx'


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
      {
        path: basename + "phantomTroupe",
        element: <PhantomTroupe />,
      },
      {
        path: basename + "zoldyckFamily",
        element: <ZoldyckFamily />,
      },
      {
        path: basename + "nen",
        element: <Nen />,
      },
      // nested routes
      {
        path: basename + "characters/:id",
        element: <CharactersDetails />,
      },
      {
        path: basename + "nen/ten",
        element: <Ten />,
      },
      {
        path: basename + "nen/zetsu",
        element: <Zetsu />,
      },
      {
        path: basename + "nen/ren",
        element: <Ren />,
      },
      {
        path: basename + "nen/emission",
        element: <Emission />,
      },
      {
        path: basename + "nen/transmutation",
        element: <Transmutation />,
      },
      {
        path: basename + "nen/manipulation",
        element: <Manipulation />,
      },
      {
        path: basename + "nen/enhancement",
        element: <Enhancement />,
      },
      {
        path: basename + "nen/conjuration",
        element: <Conjuration />,
      },
      {
        path: basename + "nen/specialization",
        element: <Specialization />,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
