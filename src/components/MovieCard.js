import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ movie }) => {


    const { original_title, overview, popularity, poster_path } = movie;


    return (
        <div className='w-48 pr-4'>
            <img alt="Movie Poster" src={IMG_CDN_URL + poster_path} />
            <div>
                <div>{original_title}</div>
                <div>{overview}</div>
                <div>{popularity}</div>
                <div></div>
            </div>
        </div>
    )
}

export default MovieCard