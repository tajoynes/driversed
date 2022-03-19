import React from "react";
//->Import Components
//-> React-Boostrap
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
//-> React Icons
import {
  AiOutlineMail,
  AiOutlineArrowUp,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { IconContext } from "react-icons";
//-> CSS
import "./../styles/Footer.css";

function Footer() {
  return (
    <>
      <Container fluid className="footer-wrapper">
        <IconContext.Provider
          value={{ className: "footerIcons", size: "1.5em" }}
        >
          <Row>
            <Col className="text-center">
              <h1>Get in Touch</h1>
              <ul className="footerList">
                <li>
                  <AiOutlineEnvironment />
                  <p>
                    1111 Mendenhall Rd<br></br>Memphis, TN 38111
                  </p>
                </li>
                <li>
                  <AiOutlinePhone />
                  <p>(111) 222-3344</p>
                </li>
                <li>
                  <AiOutlineMail />
                  <p>driversed@driversed.com</p>
                </li>
              </ul>
            </Col>
            <Col className="d-none d-sm-block text-center">
              <h1>Services</h1>
              <div className="d-grid gap-2 px-5">
                <Button className="btn footerbtn" size="lg">
                  First Time Learners Classes
                </Button>
                <Button className="btn footerbtn" size="lg">
                  Adult Classes
                </Button>
                <Button className="btn footerbtn" size="lg">
                  Adult Classes
                </Button>
                <Form.Group className="text-center">
                  <Form.Label>Don't see a date that works?</Form.Label>
                  <Form.Label>Contact for Scheduling Request</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control placeholder="Email Address" />
                    <Button variant="outline-warning" type="submit">
                      Send
                    </Button>
                  </InputGroup>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </IconContext.Provider>
      </Container>
    </>
  );
}

export default Footer;
