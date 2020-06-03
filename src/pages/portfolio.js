import React from "react";
import Card from "../components/Card"
import Projects from "../util/Projects.json"

function Portfolio() {
    return(
        <>
            {Projects.slice(0,3).map(project => {
                return <Card title={project.title} img={project.image} key={project.key} githubRepo = {project.github_repo} deployedLink={project.deployed_link}/>
            })}
            <Card img ='' title='Project 3' text= 'test' img2 ='' title2='Project 3' text2= 'test'/>
            <Card img ='' title='Project 2' text='test' img2 ='' title2='Project 3' text2= 'test'/>
        </>
    )  
}

export default Portfolio;