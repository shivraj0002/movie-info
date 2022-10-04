import React from 'react'
import classes from './MovieDetails.module.css'
const MovieDetails = (props) =>
{
  return (

    <div className={classes.container}>
      {props.children}
    </div>

  )
}

export default MovieDetails