import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layout/layout'
import Kakpokupat from './companents/kakpokupat'
import Raspradaja from './companents/raspradaja'
import Sena from './companents/sena'
import Pomosh from './companents/pomosh'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Kakpokupat />
        },
        {
          path: "/about",
          element: <Raspradaja />
        },
        {
          path: "/contact",
          element: <Sena />
        },
        {
          path: "/pomosh",
          element: <Pomosh/>
        }
      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default App
