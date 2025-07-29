import React, { useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggetions from './GptSearchSuggetions'
import { useDispatch } from 'react-redux'
import { removeMoviesData } from '../utils/gptSlice';

function GptSearch() {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(removeMoviesData());
        }
    })

    return (
        <div>
            <GptSearchBar />
            <GptSearchSuggetions></GptSearchSuggetions>
        </div>
    )
}

export default GptSearch