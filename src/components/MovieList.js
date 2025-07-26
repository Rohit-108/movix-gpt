import React from 'react'
import MovieCard from './MovieCard'
// import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {


    return (
        <div className='px-6 '>
            <h1 className='text-3xl py-4 font-bold text-white'>{title}</h1>
            <div className='flex gap-4  pb-4 overflow-x-auto overflow-y-hidden scrollbar-hide'>
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default MovieList