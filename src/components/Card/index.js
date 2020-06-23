import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import Slider from "../slider/index.js";
function MakeCard(Props) {
  return (
    <>
      <Card>
        <Slider i1={Props.i1} i2={Props.i2} i3={Props.i3}></Slider>
        <Card.Body>
          <Card.Title>
            <h3>{Props.title}</h3>
          </Card.Title>
          <Card.Text>
            <p>{Props.text}</p>
          </Card.Text>
          <Button
            className="button1"
            target="_blank"
            href={Props.githubRepo}
            variant="dark"
          >
            GitHub Repository
          </Button>
          <Button
            className="button2"
            target="_blank"
            href={Props.deployedLink}
            variant="dark"
          >
            Deployed Website
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MakeCard;
