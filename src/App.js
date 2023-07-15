import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Search from './components/Search'
import "./App.css"
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Search />}/>
      <Route path='/details/:imdbID' element={<MovieDetails />}/>
    </Routes>
    </Router>
  )
}

export default App