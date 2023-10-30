import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return;
  return (
    <div className='w-36 md:w-40 pr-4'>
        <img alt="Movie Card"
        src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard