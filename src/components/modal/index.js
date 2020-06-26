import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Carousel from "../slider/index.js";
import "./style.css";
function Example(props) {
  const [project, setProject] = useState({
    projectId: 0,
  });
  const handleProject = (event) => {
    setProject({ projectId: event.target.id });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var modalText = {
    project1: {
      title: "Learn Blast",
      deployed_link: "In development",
      github_repo: "https://github.com/tcollins2011/BLAST_Project_3",
      id: 1,
      text: "React | Auth0 | BLAST API | MongoDB| ReactBootstrap ",
    },
    project2: {
      title: "Denver Biz",
      deployed_link: "https://hidden-plains-43611.herokuapp.com/",
      github_repo: "https://github.com/vanessathi/project2",
      id: 2,
      text: "MySql | Handlebars| JQuery",
    },
    project3: {
      title: "Rosalind",
      deployed_link: "https://hidden-plains-43611.herokuapp.com/",
      github_repo: "https://github.com/vanessathi/project2",
      id: 3,
      text: "Python | Algorithms ",
    },
    project4: {
      title: "Denver Biz",
      deployed_link: "https://hidden-plains-43611.herokuapp.com/",
      github_repo: "https://github.com/vanessathi/project2",
      id: 4,
      text: "MySql | Handlebars| JQuery",
    },
    project5: {
      title: "Clickbait Quiz",
      deployed_link: "https://tcollins2011.github.io/Project_1/",
      github_repo: "https://github.com/tcollins2011/Project_1",
      id: 5,
      text: "Jquery | Ajax Calls",
    },
    project6: {
      title: "Workout Tracker",
      deployed_link: "https://protected-crag-77656.herokuapp.com/",
      github_repo: "https://github.com/tcollins2011/Workout_Tracker",
      id: 6,
      text: "Mongo DB Methods",
    },
  };

  return (
    <>
      <Button id="project1" variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Button
        id="project2"
        variant="primary"
        onHover={handleProject}
        onClick={handleShow}
      >
        Launch static backdrop modal
      </Button>
      <Button id="project3" variant="primary" onClick={handleProject}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Carousel
            Img1={props.Img1}
            Img2={props.Img2}
            Img3={props.Img3}
          ></Carousel>
        </Modal.Header>
        <Modal.Title>{modalText.project.title}</Modal.Title>
        <Modal.Body>{modalText.discover.detail}</Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          X
        </Button>
      </Modal>
    </>
  );
}

export default Example;
