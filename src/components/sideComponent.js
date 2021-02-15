import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../CSS/Sidebar.css";

const Sidebar = (props) => {

  const [movies, setMovies] = useState("Movies");
  const [name, setName] = useState("");

  return (
    <>

      
      <Nav
        className="col-md-12 d-none d-block sidebar mt-5"
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
          Movies
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
