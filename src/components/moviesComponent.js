import React, { Component, useState } from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { MOVIES } from "../shared/movies";

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const titleA = a.Title.toUpperCase();
  const titleB = b.Title.toUpperCase();

  let comparison = 0;
  if (titleA > titleB) {
    comparison = 1;
  } else if (titleA < titleB) {
    comparison = -1;
  }
  return comparison;
}

function Movies(props) {
  const [movies, setMovies] = useState(MOVIES);

  const movieList = movies.filter(movie => movie.Type === "movie").sort(compare).map((movie,index)=> {
  
    return (
      <div  key={index} style={{ color: "white" }}>
        {/* {movie.Title} */}
        <img  className="m-5 media"  style={{ width: "150px" }} src={movie.Poster} alt={movie.Title} />
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap" style={{ marginTop: "110px" }}>{movieList}</div>;
}

export default Movies;
