import React from 'react'
import lang from '../utils/languageconst'
import { useSelector } from 'react-redux'

const GPTSearchbar = () => {
const langKey=useSelector(store=>store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text'
            className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].gcptSearchPlaceholder}>
            </input>
            <button className='py-2 px-4 m-4 col-span-3 text-white rounded-lg bg-red-800 font-bold'>
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchbar