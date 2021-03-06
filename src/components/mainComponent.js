import React, { useState, useEffect } from "react";

import Sidebar from "./sideComponent";
import SearchField from "react-search-field";
import "../CSS/Sidebar.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  FormControl,
} from "react-bootstrap";
//import { MOVIES } from "../shared/movies";
import Movies from "./moviesComponent";
import Shows from "./showComponent";
import Home from "./homeComponent";
import Favorites from "./FavoriteComponent";

function Main(props) {
  // const [movies, setMovies] = useState(MOVIES);
  const [copy, setCopy] = useState("MovieStream");
  const [title, setTitle] = useState("");
 

  useEffect(() => {
    if (window.location.pathname === "/home") {
      setTitle("Home");
    } else if (window.location.pathname === "/movies") {
      setTitle("Movies");
    } else if (window.location.pathname === "/shows") {
      setTitle("Shows");
    }else if (window.location.pathname === "/favorites") {
      setTitle("Favorites");
    }
  }, []);

  const showHome = () => {
    if (window.location.pathname === "/home") {
      return <Home />;
    }
    if (window.location.pathname === "/") {
      return <Home />;
    }
  };
  const showMovies = () => {
    if (window.location.pathname === "/movies") {
      return <Movies />;
    }
  };
  const showShows = () => {
    if (window.location.pathname === "/shows") {
      return <Shows />;
    }
  };
  const showFavorites = () => {
    if (window.location.pathname === "/favorites") {
      return <Favorites />;
    }
  };

  return (
    <div>
      <Navbar
        expand="md"
        fixed="top"
        style={{ backgroundColor: "black" }}
        className="d-flex flex-row align-items-center navBoard"
      >
        <Navbar.Brand href="/home" className="">
          <span aria-label={copy} role={copy}>
            {copy.split("").map(function (char, index) {
              return (
                <span
                  className="header"
                  aria-hidden="true"
                  key={index}
                  style={{ color: "red",fontSize: "30px" }}
                >
                 {char}
                </span>
              );
            })}
          </span>
        </Navbar.Brand><h5 style={{ color: "white",fontSize:"30px"}} className="mx-auto pt-2">{title}</h5>
       
      
        {/* <Form inline className="d-flex justify-content-center text-center">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-sm-2 formControl align-middle  searchBox"
            style={{
              borderColor: "",
              color: "white",
              backgroundColor: "black",
              height: "30px",
            }}
          />
          <Button
            variant="outline-secondary"
            size="sm"
            className="align-middle"
          >
            Search
          </Button>
        </Form> */}
      </Navbar>

      <div
        id="modal_aside_right"
        className="modal fixed-right fade"
        tabindex="-1"
        role="dialog"
      ></div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={12} id="page-content-wrapper">
            {showHome()}
            {showMovies()}
            {showShows()}
            {showFavorites()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
