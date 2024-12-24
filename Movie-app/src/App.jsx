import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'

import PageNotFoundPage from './pages/PageNotFoundPage'
import RootLayout from './pages/RootLayout'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index : true,
          element:<HomePage />
        },
        {
          path : 'movie/:imdbId',
          element : <MoviePage />
        }, 
      ]
    },
    
    {
      path : '*',
      element: <PageNotFoundPage />
    }
  ]
)

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
