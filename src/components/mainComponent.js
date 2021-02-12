import React, { Component,useState } from "react";
import Header from "./headerComponent";
import Sidebar from "./sideComponent";

import '../CSS/Sidebar.css'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Movies from "./moviesComponent";
import Shows from "./showComponent";
import Home from "./homeComponent";



const showHome = () => {
  if (window.location.pathname === "/home") {
    return <Home/>
  }
}
const showMovies = () => {
  if (window.location.pathname === "/movies") {
    return <Movies/>
  }
}
const showShows = () => {
  if (window.location.pathname === "/shows") {
    return <Shows/>
  }
}


function Main(props){

    return (
   
      
        <div>
       <Header />
          <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                    
                      <Sidebar />
                    
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    
         
         {showHome()}
         {showMovies()}
         {showShows()}
                    </Col> 
                </Row>

            </Container>
   
        </div>
      
     
    );
  }


export default Main;
