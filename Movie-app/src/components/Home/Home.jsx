import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchApiAsync, fetchApiAsyncShows } from '../../store/movies/movieslice'

const Home = () => {
 
  const dispatch = useDispatch()
  useEffect (() =>{
    dispatch(fetchApiAsync())
    dispatch(fetchApiAsyncShows())
  },[dispatch])
  return (
    <div>
      
     <div className='banner-image'></div>
      <MovieListing />
    </div>
   
  )
}

export default Home
