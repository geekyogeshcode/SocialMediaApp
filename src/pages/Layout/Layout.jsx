import React from 'react'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import Home from '../home/Home'
import Profile from '../profile/Profile'
import Chatbox from '../chatbox/Chatbox'
import Nav from '../../components/nav/Nav'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'

const Layout = () => {
  const Feed = () =>{
 
    return( 
      <>
      <Nav />
          <main className='yogesh'>
            <Leftbar />
              <div className="Maincontainer">
                <Outlet />
              </div>
            <Rightbar />
          </main>
      </>
    )
  }
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Feed />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        },
        {
          path:"/chatbox/:id",
          element:<Chatbox />
        }
      ]
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/signup',
      element:<Signup />
    },
    {
      path:"/home",
      element:<Home />
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Layout
