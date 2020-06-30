import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Carousel from "../slider/index.js";
function Example(props) {
  const [isVisible, setIsVisible] = useState("Holder");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      onMouseEnter={() => setIsVisible("Hovered")}
      onMouseLeave={() => setIsVisible("Holder")}
      className={isVisible}
    >
      <img className="displayImg" src={props.project.i1} alt="project"></img>
      <div className="cardInfo">
        <h3 className="title">{props.project.title}</h3>
        <h4 className="textArea">{props.project.languages}</h4>
      </div>
      <button onClick={handleShow} className="cardBtn">
        Learn More
      </button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="myModal"
      >
        <Modal.Header>
          <Carousel
            i1={props.project.i1}
            i2={props.project.i2}
            i3={props.project.i3}
          ></Carousel>
        </Modal.Header>
        <Modal.Title>{props.project.title}</Modal.Title>
        <Modal.Title>{props.project.tag}</Modal.Title>
        <Modal.Body>{props.project.text}</Modal.Body>
        <div>
          <Button
            target="_blank"
            href={props.project.deployed_link}
            className=" btn btn-primary"
          >
            Deployed Site
          </Button>
          <Button
            target="_blank"
            href={props.project.github_repo}
            className=" btn btn-primary"
          >
            Github
          </Button>
          <Button
            className="modalClose"
            variant="secondary"
            onClick={handleClose}
          >
            X
          </Button>
        </div>
      </Modal>
    </div>
  );
}
export default Example;
