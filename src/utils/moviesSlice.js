import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowMovies: (state, action) => {
            state.nowMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
});

export const { addNowMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;