import React, { Fragment, useRef } from "react";
import classes from "./Header.module.css";
import searchIcon from "../UI/Icons/searchIcon.png";
export default function Header(props) {
  const searchInputRef = useRef();

  const searchHandler = () => {
    props.userSearchHandler(searchInputRef.current.value);
  };
  const trendingListClickHandler = (event) => {
    searchInputRef.current.value = event.target.innerText
    props.userSearchHandler(event.target.innerText);
  };
  return (
    <Fragment>
      <div className={classes.headerContainer}>
        <div>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search.."
            required
          />
          <button onClick={searchHandler} className={classes["search-btn"]}>
            <img src={searchIcon} alt="search" width="16px" height="16px" />
          </button>
        </div>
      </div>
      <h4 className={classes.h4Heading}>Some Trending Movies</h4>
      <ul className={classes.trending}>

        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Avengers
        </li>
        
        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Spider Man
        </li>
        
        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Naruto
        </li>
        
        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Stranger Things
        </li>
        
        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Dark
        </li>
        
        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Boruto
        </li>
        
        <li
          onClick={trendingListClickHandler}
          
          className={classes.listItems}
        >
          Tokyo Ghoul
        </li>
       
      </ul>
    </Fragment>
  );
}
