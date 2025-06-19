import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json = await response.json();

        console.log("**************", json.results);

        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);
};
