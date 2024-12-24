import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiAsyncMovieOrShowDetail, removeSelectedMovieOrShow } from '../../store/movies/movieslice'
import {getSelectedMovieOrShow} from '../../store/movies/movieslice'

import './MovieDetail.css'
const MovieDetail = () => {
    const {imdbId} = useParams()
    const selector = useSelector(getSelectedMovieOrShow)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchApiAsyncMovieOrShowDetail(imdbId));
        return () =>{
          dispatch(removeSelectedMovieOrShow())
        }
    },[dispatch,imdbId])
    console.log(selector)
  return (
    <div className='movie-section'>
      <div className='section-left'>
        <div className='movie-title'>
          <div className='movie-title'>{selector.Title}</div>
          <div className='movie-rating'>
            <span>
              IMDB Rating <i className='fa-fa-star'></i>: {selector.imdbRating}
            </span>
            <span>
              IMDB Votes <i className='fa-fa-thumbs-up'></i>: {selector.imdbVotes}
            </span>
            <span>
              Runtime <i className='fa-fa-film'></i>: {selector.Runtime}
            </span>
            <span>
              Year <i className='fa-fa-calender'></i>: {selector.Year}
            </span>
          </div>
          <div className='movie-plot'>
              {selector.plot}
          </div>
          <div className='movie-info'>
            <div>
              <span>Director</span>
              {selector.Director}
            </div>
            <div>
              <span>Stars</span>
              {selector.Actors}
            </div>
            <div>
              <span>Genres</span>
              {selector.Genre}
            </div>
            <div>
              <span>Language</span>
             {selector.Language}
            </div>
          </div>
          <div>
              <span>Awards</span>
              {selector.Awards}
            </div>
        </div>
      </div>
      <div className='section-right'>
          <img src={selector.Poster} alt={selector.Title}/>
      </div>
    </div>
  )
}

export default MovieDetail
