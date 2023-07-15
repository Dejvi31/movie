import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = "ec827be8";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
      if (movieDetails === null) {
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
          .then((res) => res.json())
          .then((data) => {
            setMovieDetails(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
}, [imdbID, movieDetails]);


  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details'>
    <div className='details-top'>
      <div className='details-img'>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <div className='details-year'>{movieDetails.Year}</div>
        <div className='details-title'>{movieDetails.Title}</div>
        <div className='details-runtime'>{movieDetails.Runtime}</div>
        <div className='details-type'>{movieDetails.Type}</div>
      </div>
      <div className='details-bottom'>
        <div className='details-plot'>{movieDetails.Plot}</div>
        <div className='details-cast'>{movieDetails.Actors}</div>
        <div className='details-genre'>{movieDetails.Genre}</div>
        <div className='details-rating'>{movieDetails.imdbRating}</div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
