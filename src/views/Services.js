import React from "react";
//->Import Components
import Navigation from "../components/Navigation";
import AnimatePage from "../components/AnimatePage";
import Footer from "../components/Footer";
//->Import Assets
import driverexcited from "./../assets/images/driverexcited.jpg";
import minicar from "./../assets/images/minicar.png";
import minicar2 from "./../assets/images/minicar2.png";
import road from "./../assets/images/road.png";

//-> React-Boostrap
import { Col, Container, Row, Navbar, Card, Button } from "react-bootstrap";
//-> CSS
import "./../styles/Services.css";

function Services() {
  return (
    <div className="root">
      <AnimatePage>
        <Navigation />
        <div id="sectionOne" className="sectionOneWrapper">
          <Row>
            <Col className="d-none d-sm-flex">
              {" "}
              <img className="image" src={road} />
            </Col>
            <Col className="servicecol d-flex flex-column px-5 text-center gap-1">
              <p className="sectionHeader display-5">Drivers Ed. Services</p>
              <hr />
              <p className="sectionText">
                Focusing on premium, personal services to help make the learning
                process much easier. Not only with muli-year experiences in the
                teaching profession but having help countless drivers get their
                license and feel confident and safe on the road.
              </p>
              <hr />
              <p>
                If any special accomodations are needed feel free to reach out
                to me!!
              </p>
              <Button href="/contact" className="btn contact text-nowrap">
                Contact Me!
              </Button>
            </Col>
          </Row>
        </div>

        <div id="sectionTwo" className="sectionTwoWrapper px-5">
          <Row className="gap-2">
            <Col xs={12} sm={12} md>
              <Card className="card text-center">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={driverexcited}
                />
                <Card.Body>
                  <p className="title display-6">Driving Test</p>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md>
              <Card className="card text-center">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={driverexcited}
                />
                <Card.Body>
                  <p className="title display-6">Parking Test</p>{" "}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md>
              <Card className="card text-center">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={driverexcited}
                />
                <Card.Body>
                  <p className="title display-6">Written Test</p>{" "}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </AnimatePage>
    </div>
  );
}

export default Services;
