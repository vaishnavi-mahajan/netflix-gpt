import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div className=''> 
    <div className='fixed -z-10 bg-opacity-80'>
         <img className='w-full h-screen sm:h-auto object-cover'
          src={BG_URL}
          alt="background"></img>
    </div>
    
    <div className=''>
        <GPTSearchbar></GPTSearchbar>
        <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
    </div>
      )
}

export default GPTSearch