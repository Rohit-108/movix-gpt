import { createSlice } from '@reduxjs/toolkit';



const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowMovies: null,
    },
    reducers: {
        addNowMovies: (state, action) => {
            state.nowMovies = action.payload;
        },
    }
});

export const { addNowMovies } = moviesSlice.actions;

export default moviesSlice.reducer;