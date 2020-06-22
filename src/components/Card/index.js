import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import Slider from "../slider/index.js";
function MakeCard(Props) {
  return (
    <>
      <Card>
        <Slider></Slider>
        <Card.Body>
          <Card.Title>
            <h3>{Props.title}</h3>
          </Card.Title>
          <Card.Text>
            <p>{Props.text}</p>
          </Card.Text>
          <Button className="button1" href={Props.githubRepo} variant="dark">
            GitHub Repository
          </Button>
          <Button className="button2" href={Props.deployedLink} variant="dark">
            Deployed Website
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MakeCard;
