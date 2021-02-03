import React, { Component,useState } from "react";
import Header from "./headerComponent";
import Sidebar from "./sideComponent";
import '../CSS/Sidebar.css'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
function Main(props){

    return (
   
      
        <React.Fragment>
       
          <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                         
         <Header />
                    </Col> 
                </Row>

            </Container>
   
        </React.Fragment>
      
     
    );
  }


export default Main;
