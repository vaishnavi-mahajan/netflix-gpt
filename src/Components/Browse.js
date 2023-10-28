import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header>
      {/* {
        MainContainer
          -videobackground
          -videotitle
        secondaryContainer
          -MovieList * n
          -Cards * n
      } */}
      </Header>
      <MainContainer></MainContainer>
      {/* <SecondaryContainer></SecondaryContainer> */}
    </div>
  )
}

export default Browse