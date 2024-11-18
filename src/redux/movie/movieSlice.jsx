import { createSlice} from '@reduxjs/toolkit';
import { getMovies, getMovies2 } from './movieAction';


const initialState ={
    movies : [],
    loading:false,
    error:null,
}

const movieSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getMovies.pending, (state) => {
            console.log("Loading movies...");
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getMovies.fulfilled, (state, action) => {
            console.log("Movies fetched:", action.payload);
            state.loading = false;
            state.movies =[...state.movies, ...action.payload];
        });
        builder.addCase(getMovies.rejected, (state, action)=>{
            console.log("Failed to fetch movies:", action.payload);
            state.loading = false;
            state.error = action.payload;
        })

        // popular movies
        builder.addCase(getMovies2.pending, (state) => {
            console.log("Loading movies...");
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getMovies2.fulfilled, (state, action) => {
            console.log("Movies fetched:", action.payload);
            state.loading = false;
            state.movies =[...state.movies, ...action.payload];
        });
        builder.addCase(getMovies2.rejected, (state, action)=>{
            console.log("Failed to fetch movies:", action.payload);
            state.loading = false;
            state.error = action.payload;
        })

    }
});

export default movieSlice.reducer;