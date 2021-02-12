import React, { useState } from "react";
import { Button, Navbar, Form, FormControl } from "react-bootstrap";
import { MOVIES } from "../shared/movies";
function Header(props) {
  const [movies, setMovies] = useState(MOVIES);
  const [copy, setCopy] = useState("MovieStream");




  return (
    <div>
      <Navbar expand="md" fixed="top" style={{ backgroundColor: "black" }}className="d-flex flex-row justify-content-between">
        <Navbar.Brand href="/home" className="">
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

        <Form inline className="d-flex justify-content-center text-center">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-sm-2 formControl align-middle  searchBox"
            style={{
              borderColor: "",
              color: "white",
              backgroundColor: "black",
              height:"30px"
              
            }}
          />
          <Button
            variant="outline-secondary"
            size="sm"
            className="align-middle"
          >
            Search
          </Button>
        </Form>
      </Navbar>

      <div
        id="modal_aside_right"
        className="modal fixed-right fade"
        tabindex="-1"
        role="dialog"
      ></div>
    </div>
  );
}

export default Header;
