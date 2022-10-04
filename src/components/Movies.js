import React from "react";
import classes from "./Movies.module.css";
import titleIcon from '../UI/Icons/titleIcon.png'
import yearIcon from '../UI/Icons/yearIcon.png'
import movieTypeIcon from '../UI/Icons/movieTypeIcon.png'
import { Link, useNavigate } from "react-router-dom";
const Movies = (props) => {
  const navigate = useNavigate();
  const cardClickHandler = () =>{
    navigate(`/${props.movieData.imdbID}`)
  }
  
  return (
    
    <div onClick={cardClickHandler} className={classes.cards}>
      <div className={classes["card-img"]}>
        
        <img src={props.movieData.Poster} alt="poster" />
      </div>
      <div className={classes["card-body"]}>
        <section className={classes.sec1}>
        <img src={titleIcon} alt='icon' />
         <h2>&#160;: {props.movieData.Title.slice(0 , 17)}...</h2>
        </section>
        <section >
        <img src={yearIcon} alt='icon' />
        <h4>&#160;: {props.movieData.Year}</h4>

        </section>
        <section>
        <img src={movieTypeIcon} alt='icon' />
        <h4>&#160;: {props.movieData.Type}</h4>

        </section>
       
      </div>
      <div className={classes["card-footer"]}>
        <Link to={`/${props.movieData.imdbID}`} >Read more..</Link>
      </div>
    </div>


    
  );
};

export default Movies;
