import React from 'react'
import "../styles/search.css"

const Search = () => {
  return (
    <div className='search-box'>
        <input 
         className='search-input'
         type='text'
         placeholder='Search the movie by title...'
       />
    </div>
  )
}

export default Search