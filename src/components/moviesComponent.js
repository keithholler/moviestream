import React, { Component, useState } from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Card,Button } from "react-bootstrap";

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
  const [isShown, setIsShown] = useState(false);
  

  const movieList = movies
    .filter((movie) => movie.Type === "movie")
    .sort(compare)
    .map((movie, index) => {
      return (

        <Card key={index} style={{ color: "white", backgroundColor:"black" }} className="m-4 media"  >
        <Card.Img
         
          style={{ width: "125px" }}
          src={movie.Poster}
          alt={movie.Title}
        />
      <Card.ImgOverlay className="d-flex align-items-start justify-content-center" style={{top:"-30px"}}>
      {isShown && (
                <i
                className="fa fa-heart fa-sm "
       
              />)}
       
            </Card.ImgOverlay>
        </Card>
      );
    });

  return (
  <>

      <div className="d-flex flex-row flex-wrap mediaList" style={{ marginTop: "110px" }} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        
       
           {movieList}
 
       
      </div>
     </>
  );
}

export default Movies;
