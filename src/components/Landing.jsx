import React, { useState } from "react";

//->Import Components
import DatePicker from "react-datepicker";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  MoveOut,
} from "react-scroll-motion";
import driver from "./../assets/images/driverexcited.jpg";

//-> React-Boostrap
import { Col, Container, Row, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//-> React Icons
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";
//-> CSS
import "./../styles/Landing.css";
import "react-datepicker/dist/react-datepicker.css";

function Landing() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <ScrollContainer>
        <Container fluid id="landing" className="p active landing-wrapper">
          <Row className="landing-overlay">
            <Col className="landing-text">
              <h1>"Learning to drive has never been easier"</h1>
              <Button className="btn landing-button" href="#quickSchedule">
                Schedule Appointment
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="p info-wrapper">
          <ScrollPage page={1}>
            <Animator animation={Fade(0, 1)}>
              <Row className="px-5 py-5 justify-content-center">
                <Col xs sm={6} className="landing-text">
                  <img src={driver} height="200" width="200" />
                </Col>
                <Col xs sm={6}>
                  <p className="display-6">
                    With over xx years of experience, AB's driving school has
                    been making sure drivers are ready to get on the road safely
                    and smartly{" "}
                  </p>
                </Col>
              </Row>
            </Animator>
          </ScrollPage>
        </Container>
        <Container id="quickSchedule" fluid className="p schedule-wrapper">
          <Row>
            <Col className=" d-flex justify-content-center py-5 px-1">
              <div className="scheduler py-4 px-5">
                <h1 className="text-center">Get Scheduled Now</h1>
                <Form className="">
                  <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="input" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Phone #</Form.Label>
                      <Form.Control type="input" placeholder="(111) 222-3344" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write Message"
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Date</Form.Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </Form.Group>
                  </Row>

                  <Button variant="dark" type="submit">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </ScrollContainer>
    </>
  );
}

export default Landing;
