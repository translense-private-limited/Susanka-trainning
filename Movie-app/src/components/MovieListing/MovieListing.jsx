import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getMoviesStatus } from '../../store/movies/movieslice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.css';

const MovieListing = () => {
  const movieSelector = useSelector(getAllMovies);
  const showSelector = useSelector(getAllShows);
  const moviesStatus = useSelector(getMoviesStatus);

  let renderMovies;
  let renderShows;

  if (moviesStatus === 'loading') {
    renderMovies = <div>Loading movies...</div>;
    renderShows = <div>Loading shows...</div>;
  } else if (moviesStatus === 'succeeded') {
    renderMovies =
      movieSelector.Response === 'True'
        ? movieSelector.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
        : <div>No movies found.</div>;

    renderShows =
      showSelector.Response === 'True'
        ? showSelector.Search.map((show, index) => <MovieCard key={index} data={show} />)
        : <div>No shows found.</div>;
  } else if (moviesStatus === 'failed') {
    renderMovies = <div>Error occurred while fetching movies.</div>;
    renderShows = <div>Error occurred while fetching shows.</div>;
  }

  return (
    <div className="movie-wrapper">
      <h3>Movies</h3>
      <div className="movie-container">{renderMovies}</div>
      <h3>Shows</h3>
      <div className="movie-container">{renderShows}</div>
    </div>
  );
};

export default MovieListing;
