import React from "react";
import { Image, Container, Row, Col, Card } from "react-bootstrap";
import image from "../components/images/Profile.PNG";
import express from "../components/images/express.PNG";
import javascript from "../components/images/Javascript.PNG";
import python from "../components/images/Python.PNG";
import react from "../components/images/React.PNG";
import NavBar from "../components/Nav";
import "./about.css";

function About() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid>
        <h1>About</h1>
        <Row>
          <Col className="topColumn">
            <Card>
              <Image
                src={react}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>React</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                ut, at minus voluptatem fuga quas, quis repudiandae est
                obcaecati similique fugit odio deleniti excepturi dolorem
                ratione vero facilis soluta repellat reiciendis ipsa a amet.
              </p>
            </Card>
          </Col>
          <Col className="topColumn">
            <Card>
              <Image
                src={python}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>Python</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                ut, at minus voluptatem fuga quas, quis repudiandae est
                obcaecati similique fugit odio deleniti excepturi dolorem
                ratione vero facilis soluta repellat reiciendis ipsa a amet.
              </p>
            </Card>
          </Col>
          <Col className="topColumn">
            <Card>
              <Image
                src={javascript}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>JavaScript</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                ut, at minus voluptatem fuga quas, quis repudiandae est
                obcaecati similique fugit odio deleniti excepturi dolorem
                ratione vero facilis soluta repellat reiciendis ipsa a amet.
              </p>
            </Card>
          </Col>
          <Col className="topColumn">
            <Card>
              <Image
                src={express}
                alt="Profile Picture"
                className="img-thumbnail"
              ></Image>
              <h2>Express</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                ut, at minus voluptatem fuga quas, quis repudiandae est
                obcaecati similique fugit odio deleniti excepturi dolorem
                ratione vero facilis soluta repellat reiciendis ipsa a amet.
              </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src={image}
              alt="Profile Picture"
              className="img-profile"
            ></Image>
            <h2>Who's this guy?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ut,
              at minus voluptatem fuga quas, quis repudiandae est obcaecati
              similique fugit odio deleniti excepturi dolorem ratione vero
              facilis soluta repellat reiciendis ipsa a amet.
            </p>
          </Col>
          <Col>
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
