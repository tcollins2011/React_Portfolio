import React from "react";
import Card from "../components/Card";
import Projects from "../util/Projects.json";
import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";

function Portfolio() {
  return (
    <>
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
