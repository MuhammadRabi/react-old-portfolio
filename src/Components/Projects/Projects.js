import React, { useState } from "react"
import ProjectItem from "./ProjectItem"
import projectData from "./projectsData"
import "./projects.scss"

function Projects() {
  const [projects, setProjects] = useState(projectData)
  return (
    <section className="recent-works" id="recent-works">
      <div className="container">
        <h2 className="main-text main-heading special-heading-light">
          recent projects
        </h2>
        <p className="main-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo
          mollitia quo, molestiae saepe totam iste nulla exercitationem unde
          maxime!
        </p>
        <div className="card-container grid-2">
          {projects.map((project) => {
            return <ProjectItem key={project.id} {...project} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
