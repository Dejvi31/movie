import React, { useState } from 'react';
import "../styles/search.css";
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?s=";
const API_KEY = "ec827be8";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movie,setMovie] = useState([])
  const fetchData = () => {
    fetch(`${API_URL}${search}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.Search)
        console.log(data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
  };

  return (
    <>
    <div className='search-box'>
      <input
        className='search-input'
        type='text'
        placeholder='Search the movie by title...'
        value={search}
        onChange={handleSearch}
      />
      <button className='search-btn' onClick={handleSearchClick}>Search</button>
      </div>
      <div className='movies-list'>
      {movie.map((movies,index) => {
        return (
          <MovieCard key={index} Title={movies.Title} Poster={movies.Poster} Year={movies.Year} />
        )
      }) 
      }
      </div>
   </>
  );
};

export default Search;
