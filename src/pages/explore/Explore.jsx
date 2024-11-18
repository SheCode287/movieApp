import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../redux/movie/movieAction";
import { GoDotFill } from "react-icons/go";

function Explore({apiKey}) {
 const dispatch = useDispatch();
 const {movies, loading, error} = useSelector((state)=>state.movieList);


 useEffect(()=>{
  console.log("Dispatching getMovies...");

  dispatch(getMovies(apiKey));
 }, [dispatch, apiKey]);

  if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

   

  return (
    <div className="movies-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
    {movies.length === 0 ? (
        <p>No movies found.</p>
    ) : (
        movies.map((movie) => (
            <div key={movie.id} className="movie-card  overflow-hidden">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                    alt={`${movie.title} cover`} 
                    className="w-full h-64 object-cover hover:border rounded-lg "
                />
                <div className="p-4 text-white items-center">
                <h3 className="text-lg font-semibold truncate w-30">{movie.title}</h3>
                <div className="flex justify-between items-center">
                        <h3 className="text-lg "> {new Date(movie.release_date).getFullYear()}</h3>
                        <div className="flex items-center">
                           <GoDotFill style={{color:'red'}} />102m
                        </div>
                    </div>
                </div>
            </div>
        ))
    )}
</div>
  );
};

export default Explore
