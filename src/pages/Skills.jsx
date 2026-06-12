export default function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "FastAPI",
    "SQL",
    "HTML",
    "CSS",
    "SCSS modules",
    "TailwindCSS",
    "Bootstrap",
    "WordPress",
    "PHP",
    "Node.js",
    "jQuery",
    "Jest",
    "Vitest",
    "Git",
    "Azure",
    "RAG / AI",
    "Figma",
  ];
  return (
    <>
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-card">
            {s}
          </div>
        ))}
      </div>
    </>
  );
}
