import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Houes from './components/House/Houes.jsx'
import Contact from './components/Contact/Contact.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx'
import UserDetails from './components/UserDetals/UserDetails.jsx'
import Postes from './components/Postes/Postes.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'
import { useRouteError } from 'react-router-dom'
import Eorr from './components/EorrHandle/Eorr'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Eorr/>,
    children : [
      {
        path : '/house',
        element : <Houes/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },{
        path : '/users',
        loader : () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element : <Users/>
      },
      {
        path : '/user/:userId',
        loader : ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails/>
      },
      {
        path : '/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Postes/>
      },
      {
        path : '/post/:id',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element : <PostDetails/>
      }
    ]
  }
]
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


