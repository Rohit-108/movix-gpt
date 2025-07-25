import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';


const useNowMovies = () => {


    //fetching tmdb api data and add in store
    const dispatch = useDispatch();

    const getMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowMovies(json.results));
    }

    useEffect(() => {
        getMovies();
    }, []);

}

export default useNowMovies;