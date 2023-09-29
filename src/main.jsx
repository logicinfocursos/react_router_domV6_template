import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Compare from './pages/cart/compare'
import Wishlist from './pages/cart/wishlist'
import Products from './pages/products/products'
import Product from './pages/products/product'

import Login from './pages/users/login'
import ForgotPassword from './pages/users/forgotPassword'
import Signup from './pages/users/signup'
import Error404 from './pages/errors/error404'
import Contact from './pages/contact/contact.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/error404",
    element: <Error404 />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/compare",
        element: <Compare />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "oldcontactpage",
        element: <Navigate to="/contact" />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
