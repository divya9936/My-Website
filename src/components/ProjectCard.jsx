export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
        </div>
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn-link">GitHub</a>
        {live && live !== "#" && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn-link">Live Demo</a>
        )}
      </div>
    </div>
  );
}