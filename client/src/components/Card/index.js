import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import Slider from "../slider/index.js";
function MakeCard(Props) {
  return (
    <>
      <Card key={Props.key}>
        <Slider i1={Props.i1} i2={Props.i2} i3={Props.i3}></Slider>
        <Card.Body>
          <Card.Title>
            <h3>{Props.title}</h3>
          </Card.Title>
          <Card.Text>{Props.text}</Card.Text>
          <Button
            className="button1"
            target="_blank"
            href={Props.githubRepo}
            variant="outline-dark"
          >
            GitHub
          </Button>
          <Button
            className="button2"
            target="_blank"
            href={Props.deployedLink}
            variant="outline-dark"
          >
            Website
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MakeCard;
