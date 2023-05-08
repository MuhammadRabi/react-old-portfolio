import ProjectItem from "./ProjectItem";
import projectData from "./projectsData";
import SectionTitle from "../SectionTitle";
import SectionIntro from "../SectionIntro";

function Projects() {
  return (
    <section className="page-container recent-works bg-slate-50">
      <div>
        <SectionTitle title="recent projects" />
        <SectionIntro
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo
          mollitia quo, molestiae saepe totam iste nulla exercitationem unde
          maxime!"
        />
        <div className="grid gap-10 mt-12 card-container grid-cols-320">
          {projectData.map((project) => {
            return <ProjectItem key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
