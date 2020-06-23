import React from "react";
import Card from "../components/Card";
import Projects from "../util/Projects.json";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/Nav";
import "./portfolio.css";
import image1 from "../components/images/Blast_1.PNG";
import image2 from "../components/images/Blast_2.PNG";
import image3 from "../components/images/Blast_3.PNG";
import image4 from "../components/images/DenBiz_1.PNG";
import image5 from "../components/images/DenBiz_2.PNG";
import image6 from "../components/images/DenBiz_3.PNG";
import image7 from "../components/images/TestImage_1.PNG";
import image8 from "../components/images/TestImage_2.PNG";
import image9 from "../components/images/TestImage_3.PNG";
import image10 from "../components/images/TestImage_4.PNG";
import image11 from "../components/images/TestImage_5.PNG";
import image12 from "../components/images/TestImage_6.PNG";
import image13 from "../components/images/Project1_HomePage.PNG";
import image14 from "../components/images/Project1_2ndPage.PNG";
import image15 from "../components/images/Project1_3rdPage.PNG";
import image16 from "../components/images/Fitness_1.PNG";
import image17 from "../components/images/Fitness_2.PNG";
import image18 from "../components/images/Fitness_3.PNG";

function Portfolio() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid>
        <h1 className="Title">Projects</h1>
        <Row>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            {Projects.slice(0, 1).map((project) => {
              return (
                <Card
                  title={project.title}
                  Img1={project.image1}
                  Img2={project.image2}
                  Img3={project.image3}
                  key={project.key}
                  text={project.text}
                  githubRepo={project.github_repo}
                  deployedLink={project.deployed_link}
                  i1={image1}
                  i2={image2}
                  i3={image3}
                />
              );
            })}
          </Col>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            {Projects.slice(1, 2).map((project) => {
              return (
                <Card
                  title={project.title}
                  Img1={project.image1}
                  Img2={project.image2}
                  Img3={project.image3}
                  key={project.key}
                  text={project.text}
                  githubRepo={project.github_repo}
                  deployedLink={project.deployed_link}
                  i1={image4}
                  i2={image5}
                  i3={image6}
                />
              );
            })}
          </Col>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            {Projects.slice(2, 3).map((project) => {
              return (
                <Card
                  title={project.title}
                  Img1={project.image1}
                  Img2={project.image2}
                  Img3={project.image3}
                  key={project.key}
                  text={project.text}
                  githubRepo={project.github_repo}
                  deployedLink={project.deployed_link}
                  i1={image7}
                  i2={image8}
                  i3={image9}
                />
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            {Projects.slice(3, 4).map((project) => {
              return (
                <Card
                  title={project.title}
                  Img1={project.image1}
                  Img2={project.image2}
                  Img3={project.image3}
                  key={project.key}
                  text={project.text}
                  githubRepo={project.github_repo}
                  deployedLink={project.deployed_link}
                  i1={image10}
                  i2={image11}
                  i3={image12}
                />
              );
            })}
          </Col>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            {Projects.slice(4, 5).map((project) => {
              return (
                <Card
                  title={project.title}
                  Img1={project.image1}
                  Img2={project.image2}
                  Img3={project.image3}
                  key={project.key}
                  text={project.text}
                  githubRepo={project.github_repo}
                  deployedLink={project.deployed_link}
                  i1={image13}
                  i2={image14}
                  i3={image15}
                />
              );
            })}
          </Col>
          <Col xs={12} md={6} lg={4} className="organizedColumn">
            {Projects.slice(5, 6).map((project) => {
              return (
                <Card
                  title={project.title}
                  Img1={project.image1}
                  Img2={project.image2}
                  Img3={project.image3}
                  key={project.key}
                  text={project.text}
                  githubRepo={project.github_repo}
                  deployedLink={project.deployed_link}
                  i1={image16}
                  i2={image17}
                  i3={image18}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
