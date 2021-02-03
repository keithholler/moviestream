import React, {  useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  Carousel
} from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";


function Header() {


  return (
    
    <div>
      <Navbar  expand="md" sticky="top" style={{height:"50px"}}>
        

        <Navbar.Brand href="#home" className="ml-3 mr-5 ">
        {/* <img
         src="./assets/ikea-logo.svg"
        width="60"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}
        </Navbar.Brand> 
        {/* <Form inline> 
            <FormControl type="text" placeholder="Search" className="mr-sm-2 formControl align-middle" />
            <Button variant="outline-secondary" size="sm" className="align-middle">Search</Button>
          </Form> */}
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto topLink">
            
    <Nav.Link href="#products" style={{color:"white"}}>Products</Nav.Link>
  

    <Nav.Link href="#rooms"style={{color:"white"}}>Rooms</Nav.Link>
   
    
    <Nav.Link href="#deals"style={{color:"white"}}>Deals</Nav.Link>
    


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
        </Navbar.Collapse>
      </Navbar>

      <div
        id="modal_aside_right"
        className="modal fixed-right fade"
        tabindex="-1"
        role="dialog"
      >
       
      </div>
    </div>
  );
}

export default Header;
