import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'


const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
  if(!movies || movies.length===0) return; //same as if(movies === null) return;
    
  const mainMovie=movies[0];
  if(!mainMovie)return

  const {original_title, overview, id}=mainMovie;

    return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer