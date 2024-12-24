import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }) => {
  if (!data) {
    return <div className="movie-card">Loading...</div>;
  }

  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="movie-card">
        <img 
          src={data.Poster !== 'N/A' ? data.Poster : 'fallback-image-url.jpg'} 
          alt={data.Title} 
        />
        <div className="movie-card-details">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
