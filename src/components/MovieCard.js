import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/movieCard.css"


const MovieCard = ({movie}) => {
  
  const navigate = useNavigate()
  const goToDetails = () => {
    navigate(`/details/${movie.imdbID}`)
  }
  return (
    <>
    <div onClick={goToDetails} className='movie-card'>
          <div className='movie-img'>
            <img src={movie.Poster} alt={movie.Poster} width="280px"/>
            <div className='movie-year'>{movie.Year}</div>
          </div>
          <div className='movie-title'>{movie.Title}</div>
        </div>
    </>
  )
}

export default MovieCard