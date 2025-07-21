import React, { useEffect } from 'react'
import Header from './Header'
import useNowMovies from '../hooks/useNowMovies'

const Browse = () => {

  useNowMovies();

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse