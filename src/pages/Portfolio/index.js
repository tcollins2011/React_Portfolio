import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/Nav";
import Example from "../../components/placeImage/index.js";
import "./style.css";
import image1 from "../../components/images/Blast_1.PNG";
import image2 from "../../components/images/Blast_2.PNG";
import image3 from "../../components/images/Blast_3.PNG";
import image4 from "../../components/images/DenBiz_1.PNG";
import image5 from "../../components/images/DenBiz_2.PNG";
import image6 from "../../components/images/DenBiz_3.PNG";
import image7 from "../../components/images/TestImage_1.PNG";
import image8 from "../../components/images/TestImage_2.PNG";
import image9 from "../../components/images/TestImage_3.PNG";
import image10 from "../../components/images/TestImage_4.PNG";
import image11 from "../../components/images/TestImage_5.PNG";
import image12 from "../../components/images/TestImage_6.PNG";
import image13 from "../../components/images/Project1_HomePage.PNG";
import image14 from "../../components/images/Project1_2ndPage.PNG";
import image15 from "../../components/images/Project1_3rdPage.PNG";
import image16 from "../../components/images/Fitness_1.PNG";
import image17 from "../../components/images/Fitness_2.PNG";
import image18 from "../../components/images/Fitness_3.PNG";

const modalText = {
  blast: {
    title: "Learn Blast",
    languages: "React | Auth0| MongoDB",
    tag: "BLAST Explanation",
    i1: image1,
    i2: image2,
    i3: image3,
    text:
      "Learn Blast offers a basic understanding and explanation of how a BLAST search is run. A react site that features basic BLAST calls and explanations.",
    deployed_link: "https://glacial-gorge-33859.herokuapp.com/",
    github_repo: "https://github.com/tcollins2011/BLAST_Project_3",
  },
  denBiz: {
    title: "Denver Biz",
    languages: "MySql | Handlebars | Express",
    tag: "Small Business Locator",
    i1: image4,
    i2: image5,
    i3: image6,
    text:
      "Denver Biz offers people a way to add and track the location of small businesses within the city of Denver. A small database that stores business information and provides google maps info.",
    deployed_link: "https://hidden-plains-43611.herokuapp.com/",
    github_repo: "https://github.com/vanessathi/project2",
  },
  quiz: {
    title: "Planet Quiz",
    languages: "Jquery | Api Calls",
    tag: "Clickbait Quiz",
    i1: image13,
    i2: image14,
    i3: image15,
    text:
      "A fun and short quiz that takes in a variety of answers and then informs you of which planet you are from. It was an early project utilizing API calls and basic javascript logic.",
    deployed_link: "https://tcollins2011.github.io/Project_1/",
    github_repo: "https://github.com/tcollins2011/Project_1",
  },
  workOut: {
    title: "Workout Tracker",
    languages: "MongoDb",
    tag: "Workout Analytics",
    i1: image16,
    i2: image17,
    i3: image18,
    text:
      "Workout Tracker allows a user to input their workout information and will provide them visual data representations of what they accomplished. A small project that utilizes MongoDB calls and basic graphing principles.",
    deployed_link: "https://protected-crag-77656.herokuapp.com/",
    github_repo: "https://github.com/tcollins2011/Workout_Tracker",
  },
  rosalind: {
    title: "Bioinformatics Algorithms",
    languages: "Python | Algorithms",
    tag: "Bioinformatics Problems",
    i1: image7,
    i2: image8,
    i3: image9,
    text:
      "A series of algorithms that solved questions posed by http://rosalind.info/problems/locations/. These algorithms are all written in python and address common biological questions that require computer programming.",
  },
  burger: {
    title: "Burger Devourer",
    languages: "Express | Jquery",
    tag: "Object Maker",
    i1: image10,
    i2: image11,
    i3: image12,
    text:
      "A site that allows you to create and devour burgers. An early foray in to a complete backend and frontend site.",
  },
};
function Portfolio() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid>
        <h1 className="mainTitle">Projects</h1>
        <Row md={6}>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            <Example project={modalText.blast}></Example>
          </Col>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            <Example project={modalText.denBiz}></Example>
          </Col>

          <Col xs={12} md={6} lg={4} className="organizedColumn">
            <Example project={modalText.quiz}></Example>
          </Col>
        </Row>
        <Row md={6}>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            <Example project={modalText.workOut}></Example>
          </Col>

          <Col xs={12} md={6} lg={4} className="organizedColumn">
            <Example project={modalText.rosalind}></Example>
          </Col>

          <Col xs={12} md={6} lg={4} className="organizedColumn">
            <Example project={modalText.burger}></Example>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
