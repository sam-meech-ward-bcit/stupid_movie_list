import { useEffect, useState } from 'react'
import './App.css'

import MovieCard from './Components/MovieCard'
import axios from 'axios'

const url = "http://api.themoviedb.org/3/discover/movie?api_key=88490f4a3355734664324f46851d6274"
async function getMovies() {
  const result = await axios.get(url)
  const movies = result.data.results
  return movies
}

function App() {

  const [movies, setMovies] = useState([])

  useEffect( () => {
    // only gets executed on first render (one time)
    // getMovies.then(m => {
    //   setMovies(m)
    // })
    (async function () {
      const movies = await getMovies()
      setMovies(movies)
    })()
  }, [])

  return (
    <div className="App">
      <div className="movie-cards">
        {
         movies.map(movie => (
          <MovieCard movie={movie}></MovieCard>
        ))
        }
      </div>
    </div>
  )
}

export default App
