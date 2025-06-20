import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const json = await response.json();

        console.log("**************", json.results);

        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };

    getPopularMovies();
  }, [dispatch]);
};
