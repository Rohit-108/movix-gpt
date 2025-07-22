import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {


    const movies = useSelector(store => store.movies)

    return (
        movies.nowMovies && (
            <div className=' bg-black'>
                <div className='-mt-52 pl-10 relative z-20'>
                    <MovieList title={"Now Playing Movies"} movies={movies.nowMovies} />
                    <MovieList title={"Trending Movies"} movies={movies.nowMovies} />
                    <MovieList title={"Popular Movies"} movies={movies.nowMovies} />
                    <MovieList title={"Upcoming Movies"} movies={movies.nowMovies} />
                    <MovieList title={"Horror Movies"} movies={movies.nowMovies} />
                </div>

            </div>
        )
    )
}

export default SecondaryContainer