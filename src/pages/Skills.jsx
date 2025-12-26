export default function Skills() {
  const skills = [
    "React.js", "JavaScript", "TypeScript", "Java", "Python", "SQL", 
    "HTML", "CSS", "SCSS", "TailwindCSS", "Bootstrap", 
    "WordPress", "PHP", "Node.js", "jQuery", 
    "Vitest", "Jest", "Git", "Azure", "Figma"
  ];
  return (
    <>
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map(s => <div key={s} className="skill-card">{s}</div>)}
      </div>
    </>
  );
}