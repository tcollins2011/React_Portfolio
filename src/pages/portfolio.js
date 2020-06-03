import React from "react";
import Card from "../components/Card"
import Projects from "../util/Projects.json"

function Portfolio() {
    return(
        <>
            {Projects.map(project => {
                return <Card title={project.title} Img={project.image} key={project.key} githubRepo = {project.github_repo} deployedLink={project.deployed_link}/>
            })}
        </>
    )  
}

export default Portfolio;