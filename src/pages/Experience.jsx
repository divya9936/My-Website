import styles from "../styles/styles";

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <div className="exp-header">
          <h3>Associate Software Engineer</h3>
          <span className="company">Adrosonic</span>
          <span className="duration">July 2024 - Present</span>
        </div>
        <ul className="exp-description">
          <li>Revamped corporate website using <strong>WordPress CMS</strong> with custom HTML, CSS, and JS, improving engagement.</li>
          <li>Developed <strong>5+ custom plugins</strong> to enhance site functionality.</li>
          <li>Built <strong>Single Page Applications (SPAs)</strong> using React.js and implemented unit testing with Jest and Vitest.</li>
          <li>Implemented modern styling using <strong>SCSS modules</strong> for responsive designs.</li>
          <li>Utilized <strong>Azure</strong> services (App Service, Logic Apps, Function Apps, Blob Storage).</li>
          <li>Mentored junior developers, improving team productivity by 20% through code reviews.</li>
        </ul>
      </div>
    </div>
  );
}
