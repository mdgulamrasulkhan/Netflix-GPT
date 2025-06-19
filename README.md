# Netflix GPT

- Create React App
- Configure Tailwindcss
- Header
- routing of App
- Login form
- Sign Up Form
- Form Validation
- useRef Hook
- firebase setup
- deploying our app to production
- Create Sign Up User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- implemented Sign Out
- Update prfile
- Fetch movies from TMDB
- Bugfix -> Sign up user displayName and Profile picture update
- Bugfix -> if the user is not logged in redirect /browse to Login page and vice versa
- Unsubscribed to the onAuthStateChnaged callback
- Add hardcoded value to the constant file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- created Custom hook for now paying movies
- create MoviesSlice
- Update Store with movies Data
- Planning for MainContainer & secndary container
- fetch data from trailor video
- Update Store with Trailor Video Data
- Embedded the youtube video and make it autoplay and mute
- Tailwind Classes to make container look awesome
- Build secondary component
- Build movie list
- Build Movie Card
- TMDB IMG CDN URL
- made the Browse page Amzing with Tailwind Css
- UsePopularMovies Custom Hook

# features

s

- Login/Sign Up

  - sign in / sign Up Page
  - redirect to Browse page

- Browse (after authentication)
  - header
  - main movie
    - trailor in background
    - tittle & description
    - movie suggestion
      - movies list \* N

# NetflixGpt

- Search Bar
- Movie Suggestions

import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
if(!movies) return;
return (

<div className="px-4 md:px-7 w-screen ">
<p className=" text-white pt-12 md:pt-4 md:text-2xl pb-4">{title}</p>
<div className=" flex overflow-x-scroll scrollbar-hide">
<div className=" flex">
{movies.map((movie)=> <MovieCard key= {movie.id} posterPath = { movie.poster_path} />)}
</div>
</div>
</div>
)
}

export default MovieList;
