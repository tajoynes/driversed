import React from "react";
//->Import Components
//-> React-Boostrap
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
//-> React Icons
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";
//-> CSS
import "./../styles/Navigation.css";

function Navigation() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "navIcons",
          size: "1.5em",
        }}
      >
        <Navbar bg="warning">
          <Container fluid>
            <Navbar.Brand className="navBrand" href="/">
              AB's Driving School
            </Navbar.Brand>
            <Nav className="d-none d-sm-block">
              <Navbar.Text>Questions ?</Navbar.Text>
              <Button className="btn navIcons">
                <AiOutlineMail className="navIcons" />
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </IconContext.Provider>
      <Navbar bg="light" collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand className="navBrandScheduleWrapper">
            <Nav className="d-none d-sm-block ">
              <Navbar.Text>
                <span className="navBrandSchedule">Mon-Fri:</span> 8am-5pm
              </Navbar.Text>
              {"   "}
              <Navbar.Text>
                <span className="navBrandSchedule">Sat & Sun:</span> 10am-3pm
              </Navbar.Text>
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link className="navlinks" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="navlinks" href="services">
                Services
              </Nav.Link>
              <Nav.Link className="navlinks" href="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
