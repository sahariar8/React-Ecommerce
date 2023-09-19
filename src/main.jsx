import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import IndividualProduct from './components/IndividualProduct'
import AllCards from './components/AllCards'
import CardDetails from './components/CardDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header></Header>,
    children:[
      {
        path:'/Products',
        element:<Products></Products>,
        loader:()=>fetch('https://dummyjson.com/products')
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'/Dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/product/:productId',
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.productId}`),
        element:<IndividualProduct></IndividualProduct>
      },
      {
        path:'/',
        element:<AllCards></AllCards>,
        loader:()=>fetch('https://dummyjson.com/products')
      },
      {
        path:'/card/:cardId',
        element:<CardDetails></CardDetails>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.cardId}`)
      }
    ]
  },
  
  {
    path:'/footer',
    element:<Footer></Footer>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
