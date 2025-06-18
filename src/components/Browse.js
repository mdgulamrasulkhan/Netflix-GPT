import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer  from "./MainContainer"
import SecondaryContainer  from './SecondaryContainer'; // ✅ named import

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
        Structure:
        - MainContainer (VideoBackground + VideoTitle)
        - SecondaryContainer (MovieList + MovieCard * n)
      */}
    </div>
  );
};

export default Browse;
