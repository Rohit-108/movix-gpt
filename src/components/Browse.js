import React, { useEffect } from 'react'
import Header from './Header'
import useNowMovies from '../hooks/useNowMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  useNowMovies();
  usePopularMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse