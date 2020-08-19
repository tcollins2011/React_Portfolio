import React from "react";
import { Image, Container, Row, Col, Card } from "react-bootstrap";
import image from "../components/images/Profile.PNG";
import express from "../components/images/express.PNG";
import javascript from "../components/images/Javascript.PNG";
import python from "../components/images/Python.PNG";
import linkedIn from "../components/images/icons/LI-Logo.png";
import gitHub from "../components/images/icons/GitHub_Logo.png";
import react from "../components/images/React.PNG";
import NavBar from "../components/Nav";
import "./about.css";

function About() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid>
        <h1>About</h1>
        <Row className="topRow">
          <Col xs={12} md={6} lg={3} className="topColumn">
            <Card
              style={{
                height: "100%",
                outlineColor: "#5085a5",
                outlineStyle: "solid",
              }}
            >
              <Image
                src={react}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>React</h2>
              <p></p>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="topColumn">
            <Card
              style={{
                height: "100%",
                outlineColor: "#5085a5",
                outlineStyle: "solid",
              }}
            >
              <Image
                src={python}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>Python</h2>
              <p></p>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="topColumn">
            <Card
              style={{
                height: "100%",
                outlineColor: "#5085a5",
                outlineStyle: "solid",
              }}
            >
              <Image
                src={javascript}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>JavaScript</h2>
              <p></p>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="topColumn">
            <Card
              style={{
                height: "100%",
                outlineColor: "#5085a5",
                outlineStyle: "solid",
              }}
            >
              <Image
                src={express}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>Express</h2>
              <p></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6} className="profileText">
            <Image
              src={image}
              alt="Profile Picture"
              className="img-profile"
              roundedCircle
            ></Image>
            <div>
              <hr />
              <div className="socialLinks">
                <a
                  href="https://www.linkedin.com/in/tyler-collins-0a5ab6162/"
                  target="blank"
                >
                  <img
                    src={linkedIn}
                    alt="LinkedIn Logo"
                    className="link"
                  ></img>
                </a>
                <a href="https://github.com/tcollins2011" target="blank">
                  <img src={gitHub} alt="GitHub logo" className="link"></img>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="description">
            <h2>Who's this guy?</h2>
            <p>
              I'm a new developer who has been focusing on full stack
              applications in Denver,Co. I have a passion for learning new
              technologies and trying to integrate and use them in my
              programming.
            </p>
            <p>
              Recently, I have been focusing on learning React and working on a
              chatbot based in python that responds to a user using
              deep-learning AI.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
