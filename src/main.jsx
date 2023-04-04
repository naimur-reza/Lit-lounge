import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Books from './components/Books/Books'
import BookInfo from './components/Books/BookInfo'
import Loader from './components/Loading/Loader'

const router = createBrowserRouter([{
  path:"/",
  element:<App></App>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/books",
      element:<Books/>,
      loader: ()=> fetch('https://api.itbook.store/1.0/new')
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"book/:id",
      element:<BookInfo/>,
      loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
    },
    {
      path:"/loader",
      element:<Loader/>
    }
  ]

}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
