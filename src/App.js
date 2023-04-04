import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ShowsContainer from './Components/ShowsContainer/ShowsContainer'
import {Outlet, createBrowserRouter} from 'react-router-dom'
import Summary from './Components/SummaryPage/Summary'

const AppLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element:<ShowsContainer/>
      },
      {
        path:"/show/:showId",
        element:<Summary/>
      }
    ]
  }
])



export default AppRouter
