import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </>
  );
}