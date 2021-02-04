import React, { useState } from "react";
import { Button, Nav, Navbar, Carousel } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";

function Header() {
  return (
    <div>
      <Navbar expand="md" sticky="top" style={{ height: "50px" }}>
        <Navbar.Brand href="#home" className="ml-3 mr-5 "></Navbar.Brand>

        <Nav className="m-auto topLink">
          <Nav.Link href="#products" style={{ color: "white" }}>
            Products
          </Nav.Link>

          <Nav.Link href="#rooms" style={{ color: "white" }}>
            Rooms
          </Nav.Link>

          <Nav.Link href="#deals" style={{ color: "white" }}>
            Deals
          </Nav.Link>
        </Nav>
        <Nav.Link href="#truck">
          <i className="fa fa-truck fa-lg fa-flip-horizontal" />
        </Nav.Link>
        <Nav.Link href="#user">
          <i className="fa fa-user fa-lg " />
        </Nav.Link>
        <Nav.Link href="#user">
          <i className="fa fa-heart fa-lg " />
        </Nav.Link>
        <Nav.Link href="#user">
          <i className="fa fa-shopping-basket fa-lg " />
        </Nav.Link>
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
