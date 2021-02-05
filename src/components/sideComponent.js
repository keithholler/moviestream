import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../CSS/Sidebar.css";

const Sidebar = (props) => {

  const [movies, setMovies] = useState("Movies");

  return (
    <>
 
      
      <Nav
        className="col-md-12 d-none d-md-block sidebar "
        activeKey="/home"
        //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky">
        </div>

       

        <Nav.Item>
          <Nav.Link
            href="/home"
            className="ml-1 home"
            style={{ color: "white" }}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Link href="/movies" className="ml-1 mm" style={{ color: "white" }}>
          <span
            style={{ color: "white" }}
            className=" text-center"
            aria-label={movies}
            role={movies}
          >
            {movies.split("").map(function (char, index) {
              return (
                <span aria-hidden="true" key={index}>
                  {char}
                </span>
              );
            })}
          </span>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link href="/shows" className="ml-1" style={{ color: "white" }}>
            Shows
          </Nav.Link>
        </Nav.Item>
      </Nav>
   
  
    </>
  );
};

export default Sidebar;
