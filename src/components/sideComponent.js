import React from "react";
import {Nav} from "react-bootstrap";
import '../CSS/Sidebar.css'

const Sidebar = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Movies">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Shows">Shows</Nav.Link>
            </Nav.Item>
          
            </Nav>
          
        </> 
        );
  };

  export default Sidebar