import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";

// fetching popular movies

export const getMovies = createAsyncThunk(
    'movies/fetchMovies',
    async ( apiKey, {rejectWithValue})=>{
        try{
            const response = await movieApi.fetchMovies(apiKey);
            return response;
        }catch(error){
            return rejectWithValue('No Movies available')
        }
    }
)
export const getMovies2 = createAsyncThunk(
    'movies/fetchMovies2',
    async ( apiKey, {rejectWithValue})=>{
        try{
            const response = await movieApi.fetchMovies2(apiKey);
            return response;
        }catch(error){
            return rejectWithValue('No Movies available')
        }
    }
)