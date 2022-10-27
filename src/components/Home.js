import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { apiSearchMovie } from "../apiFetching/apiFetching";
import Header from "./Header";
import MovieDetails from "./MovieDetails";
import Movies from "./Movies";
import Movie from "./Movie";
import LoadingBar from "react-top-loading-bar";

export default function Home() {
  const [movieName, setMoviename] = useState("vikings");
  const [progressBar, setProgressBar] = useState(0);

  const [movieD, setMovieD] = useState({ movieData: [], isThere: true });

  const getMovieData = async (value) => {
    let data;
    setProgressBar(25);
    try {
      data = await apiSearchMovie(value).catch((error) => {
        throw new Error();
      });
      setProgressBar(55);
    } catch (error) {
      data = { Response: false };
    }
    setProgressBar(85);
    if (data.Response) {
      setMovieD({
        movieData: [...data.data],
        isThere: true,
      });
    } else {
      setMovieD({
        movieData: movieD.movieData,
        isThere: false,
      });
    }
    setProgressBar(100);
  };
  useEffect(() => {
    getMovieData(movieName);
  }, [movieName]);
  const userSearchHandler = (searchValue) => {
    setMoviename(searchValue);
  };

  const loadedMovies = movieD.movieData.map((movie) => (
    <Movies movieData={movie} key={movie.imdbID} />
  ));
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <>
            <LoadingBar
              color="#f11946"
              progress={progressBar}
              onLoaderFinished={() => setProgressBar(0)}
            />
            <Header userSearchHandler={userSearchHandler} />
            {movieD.isThere && <MovieDetails>{loadedMovies}</MovieDetails>}
            {!movieD.isThere && (
              <MovieDetails>
                {
                  <h3 style={{ color: "white" }}>
                    No Movie Found For This Name
                  </h3>
                }
              </MovieDetails>
            )}
          </>
        }
      />
      <Route path="/:id" element={<Movie />} />
    </Routes>
  );
}
