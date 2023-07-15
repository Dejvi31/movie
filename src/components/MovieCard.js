import React from 'react'
import "../styles/movieCard.css"

const MovieCard = ({Title,Poster,Year}) => {
  return (
    <>
    <div className='movie-card'>
          <div className='movie-img'>
            <img src={Poster} alt={Poster} width="280px"/>
            <div className='movie-year'>{Year}</div>
          </div>
          <div className='movie-title'>{Title}</div>
        </div>
    </>
  )
}

export default MovieCard