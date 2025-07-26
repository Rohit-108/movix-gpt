import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constant';
import { BsPlayCircle } from "react-icons/bs";
import ShimmerMovieCard from './Shimmer';

const MovieCard = ({ movie }) => {

  const [active, setActive] = useState(false);

  const { poster_path, original_title, overview, vote_average } = movie;

  return (


    <div
      className="relative w-48 pr-4"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {!active && (
        <img
          alt="Movie Poster"
          src={IMG_CDN_URL + poster_path}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
        />
      )}

      {active && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 p-3  z-10 flex flex-col justify-between">
          <img
            alt="Movie Poster"
            src={IMG_CDN_URL + poster_path}
            className="w-44 h-24"
          />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white text-sm font-bold line-clamp-2">{original_title}</h3>
              <BsPlayCircle className="text-white text-xl cursor-pointer" />
            </div>
            <p className="text-white text-xs line-clamp-3">{overview}</p>
          </div>
          <div className="text-white text-xs mt-2">Votes: {vote_average}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
