import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/movie/movieSlice";


const store = configureStore({
    reducer:{
        movieList:movieReducer, 
    }
})

export default store;