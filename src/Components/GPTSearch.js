import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
    <div className='fixed -z-10 bg-opacity-80'>
         <img
          src={BG_URL}
          alt="background"></img>
    </div>
        <GPTSearchbar></GPTSearchbar>
        <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
  )
}

export default GPTSearch