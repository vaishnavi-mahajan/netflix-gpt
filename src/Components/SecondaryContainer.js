import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
    <div className='mt-0 pl-4 md:-mt-72 md:pl-8 relative z-50'>
     <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies}></MovieList>  
     <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
     <MovieList title={"TopRated"} movies={movies.topRatedMovies}></MovieList>
     <MovieList title={"UpComing"} movies={movies.upcomingMovies}></MovieList>
     </div>
    </div>
  )
}

export default SecondaryContainer