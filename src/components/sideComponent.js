import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../CSS/Sidebar.css";

const Sidebar = (props) => {
  const [copy, setCopy] = useState("MovieStream");
  const [movies, setMovies] = useState("Movies");

  return (
    <>
      <Navbar.Brand href="#home" className="ml-4 mt-2">
        <span aria-label={copy} role={copy}>
          {copy.split("").map(function (char, index) {
            return (
              <span
                className="header"
                aria-hidden="true"
                key={index}
                style={{ color: "red" }}
              >
                {char}
              </span>
            );
          })}
        </span>
      </Navbar.Brand>
      <Nav
        className="col-md-12 d-none d-md-block sidebar "
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link
            href="/home"
            className="text-center"
            style={{ color: "white" }}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            // eventKey="/Movies"
            className="text-center move"
            style={{ color: "white" }}
          >
             <span aria-label={movies} role={movies}>
          {movies.split("").map(function (char, index) {
            return (
              <span
                className="movies"
                aria-hidden="true"
                key={index}
               
              >
                {char}
              </span>
            );
          })}
        </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="/Shows"
            className="text-center"
            style={{ color: "white" }}
          >
            Shows
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
