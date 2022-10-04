import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiMovieGet } from "../apiFetching/apiFetching";
import LoadingBar from "react-top-loading-bar";
import classes from "./Movie.module.css";
import titleIcon from "../UI/Icons/titleIcon.png";
import yearIcon from "../UI/Icons/yearIcon.png";
import movieTypeIcon from "../UI/Icons/movieTypeIcon.png";
import ratingIcon from "../UI/Icons/ratingIcon.png";
import genreIcon from "../UI/Icons/genreIcon.png";
import releaseDateIcon from "../UI/Icons/releaseDateIcon.png";
import votesIcon from "../UI/Icons/votesIcon.png";
import countryIcon from "../UI/Icons/countryIcon.png";
import languagesIcon from "../UI/Icons/languagesIcon.png";
import writerIcon from "../UI/Icons/writerIcon.png";
import directorIcon from "../UI/Icons/directorIcon.png";
import movieRuntimeIcon from "../UI/Icons/movieRuntimeIcon.png";
import leftArrowIcon from "../UI/Icons/leftArrowIcon.png";

const Movie = () =>
{
  const [movieData, setMovieData] = useState({});

  const [progress, setProgress] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

  const [errorH, setErrorH] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const getMovieData = async (id) =>
  {
    let movieDetails;
    try
    {
      setProgress(25);
      movieDetails = await apiMovieGet(id).catch((errro) =>
      {
        throw new Error();
      });
      setProgress(65);
      setMovieData(movieDetails);
      setIsLoaded(true);
      if (movieDetails.Response !== 'False')
      {
        setErrorH(false);
      } else
      {
        setErrorH(true);
      }
    } catch (error)
    {
      setIsLoaded(false);
      setErrorH(true);
    }
    setProgress(100);
  };
  useEffect(() =>
  {
    getMovieData(id);
  }, [id]);
  const navigationHandler = () =>
  {
    navigate(-1);
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={classes.bodyC}>
        {!isLoaded && errorH && (
          <h3 style={{ color: "white", textAlign: "center" }}>
            Something Went Wrong
          </h3>
        )}
        {isLoaded && !errorH && (
          <div className={classes.wraper}>
            <button onClick={navigationHandler} className={classes.goBackBtn}>
              <img alt="icon" src={leftArrowIcon} />
              Go Back
            </button>
            <img
              className={classes.posterImg}
              alt="icon"
              src={movieData.Poster}
            />
            <div className={classes.sectionContainer}>
              <section className={classes.section}>
                <img alt="icon" src={titleIcon} />
                <h2>Title :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Title.length > 13
                    ? movieData.Title.slice(0, 13)
                    : movieData.Title}</h2>
              </section>
              <section className={`${classes.section} ${classes.wd}`}>
                <img alt="icon" src={movieRuntimeIcon} />
                <h2>Runtime :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Runtime}</h2>
              </section>

              <section className={classes.section}>
                <img alt="icon" src={yearIcon} />
                <h2>Year :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Year}</h2>
              </section>
              <section className={`${classes.section} ${classes.wd}`}>
                <img alt="icon" src={releaseDateIcon} />
                <h2>Release Date :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Released}</h2>
              </section>

              <section className={classes.section}>
                <img alt="icon" src={ratingIcon} />
                <h2>Ratings :&#160;</h2>
                <h2 className={classes.sectionHeading}>
                  {movieData.imdbRating}
                </h2>
              </section>
              <section className={`${classes.section} ${classes.wd}`}>
                <img alt="icon" src={votesIcon} />
                <h2>Votes :&#160;</h2>
                <h2 className={classes.sectionHeading}>
                  {movieData.imdbVotes}
                </h2>
              </section>
              <section className={classes.section}>
                <img alt="icon" src={genreIcon} />
                <h2>Genre :&#160;</h2>
                <h2 className={classes.sectionHeading}>
                  {movieData.Genre.length > 13
                    ? movieData.Genre.slice(0, 13)
                    : movieData.Genre}
                </h2>
              </section>

              <section className={`${classes.section} ${classes.wd}`}>
                <img alt="icon" src={movieTypeIcon} />
                <h2>Type :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Type}</h2>
              </section>

              <section className={classes.section}>
                <img alt="icon" src={countryIcon} />
                <h2>Country :&#160;</h2>
                <h2 className={classes.sectionHeading}>
                  {movieData.Country.length > 13
                    ? movieData.Country.slice(0, 13)
                    : movieData.Country}
                </h2>
              </section>
              <section className={`${classes.section} ${classes.wd}`}>
                <img alt="icon" src={languagesIcon} />
                <h2>Languages :&#160;</h2>
                <h2 className={classes.sectionHeading}>
                  {movieData.Language.length > 13
                    ? movieData.Language.slice(0, 13)
                    : movieData.Language}
                  ...
                </h2>
              </section>

              <section className={classes.section}>
                <img alt="icon" src={writerIcon} />
                <h2>Writer :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Writer.length > 13
                    ? movieData.Writer.slice(0, 13)
                    : movieData.Writer}</h2>
              </section>
              <section className={`${classes.section} ${classes.wd}`}>
                <img alt="icon" src={directorIcon} />
                <h2>Director :&#160;</h2>
                <h2 className={classes.sectionHeading}>{movieData.Director.length > 13
                    ? movieData.Director.slice(0, 13)
                    : movieData.Director}</h2>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Movie;
