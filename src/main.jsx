import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import AddCoffee from './Pages/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update/:id',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
