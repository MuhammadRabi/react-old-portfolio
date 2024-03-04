import ProjectItem from "./ProjectItem"
import SectionTitle from "../SectionTitle"
import SectionIntro from "../SectionIntro"
import projectData from "../../constants/projectsData"

function Projects() {
  return (
    <section className="page-container recent-works bg-slate-50" id="projects">
      <div>
        <SectionTitle title="recent projects" />
        <SectionIntro content="Explore my portfolio showcasing diverse projects, ranging from sleek React web apps to customized Shopify themes, each demonstrating my expertise in front-end development." />
        <div className="grid grid-cols-1 gap-10 mt-12 lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-24">
          {projectData.map((project) => {
            return <ProjectItem key={project.id} {...project} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
