import React, { Component, useState } from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

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

const Movies = (props) => {
  const [movies, setMovies] = useState(MOVIES);
  const [isShown, setIsShown] = useState(false);
  const [favorite, setFavorite] = useState(movies.Favorite);

  const movieList = movies
    .filter((movie) => movie.Type === "movie")
    .sort(compare)
    .map((movie) => {
      function handleClick(t) {
        console.log(movie);
        console.log(movie.ID);
        console.log(t.ID);
        if (movie.ID === t.ID) {
          if (movie.Favorite) {
            movie.Favorite = false;
            const fav = [...movies];
            setMovies(fav);
          } else {
            movie.Favorite = true;
            const fav = [...movies];
            setMovies(fav);
            
          }
        }
      }

      return (
        <Card
          key={movie.ID}
          data-id={movie.ID}
          style={{ color: "white", backgroundColor: "black" }}
          className="m-4 media"
        >
          <Card.Img
            style={{ width: "125px" }}
            src={movie.Poster}
            alt={movie.Title}
          />
          <Card.ImgOverlay
            className="d-flex align-items-start justify-content-center"
            style={{ top: "-35px" }}
          >
            {movie.Favorite ? (
              <i
                className="fa fa-heart fa-sm"
                onClick={() => handleClick(movie)}
              />
            ) : (
              <i
                className="fa fa-heart-o fa-sm"
                onClick={() => handleClick(movie)}
              />
            )}
          </Card.ImgOverlay>
        </Card>
      );
    });

  return (
    <>
      <div
        className="d-flex flex-row flex-wrap mediaList"
        style={{ marginTop: "110px" }}
      >
        {movieList}
      </div>
    </>
  );
};

export default Movies;
