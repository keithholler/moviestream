import React, { Component, useState } from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { MOVIES } from "../shared/movies";






function Favorite(props) {
  const [movies, setMovies] = useState(MOVIES);


  const movieList = movies
    .filter((movie) => movie.Favorite === "true")
    .map((movie, index) => {
      return (
        <div key={index} style={{ color: "white" }}>
          {/* {movie.Title} */}
          <img
            className="m-5 media"
            style={{ width: "150px" }}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      );
    });

  return (
  <>

      <div className="d-flex flex-row flex-wrap mediaList" style={{ marginTop: "110px" }}>
        
       
           {movieList}
 
       
      </div>
     </>
  );
}

export default Favorite;