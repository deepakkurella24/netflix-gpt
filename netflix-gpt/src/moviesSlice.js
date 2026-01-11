import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  nowPlaying: null,
  popular: null,
  topRated:null,
  upComing:null

};


const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
   
    setNowPlaying: (state, action) => {
      state.nowPlaying=action.payload
    },
    setPopular: (state, action) => {
      state.popular=action.payload
    },
    setUpComing: (state, action) => {
      state.upComing=action.payload
    },
    setTopRated: (state, action) => {
      state.topRated=action.payload
    },

    clearAllMovies: () => initialState,
  },
});


export const { setNowPlaying, setPopular,setUpComing,clearAllMovies,setTopRated } = moviesSlice.actions;

export default moviesSlice.reducer;
