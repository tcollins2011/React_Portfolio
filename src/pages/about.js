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
              <p>Experience working with React Hooks.</p>
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
              <p>Experience working with React Hooks.</p>
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
              <p>Experience working with React Hooks.</p>
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
              <p>Experience working with React Hooks.</p>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ut,
              at minus voluptatem fuga quas, quis repudiandae est obcaecati
              similique fugit odio deleniti excepturi dolorem ratione vero
              facilis soluta repellat reiciendis ipsa a amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ut,
              at minus voluptatem fuga quas, quis repudiandae est obcaecati
              similique fugit odio deleniti excepturi dolorem ratione vero
              facilis soluta repellat reiciendis ipsa a amet.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
