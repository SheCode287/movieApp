 import axios from "axios"; 


export const apiKey =import.meta.env.VITE_TMDB_API_KEY;
console.log('API Key:', import.meta.env.VITE_TMDB_API_KEY);


export const movieApi = {
  // FETCH  popular MOVIES
  fetchMovies : async(apiKey) =>{
    const response = await axios.get(
     `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  },
// FETCH  upcoming MOVIES
  fetchMovies2 : async(apiKey) =>{
    const response = await axios.get(
     `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
    return response.data.results;
  }
}


