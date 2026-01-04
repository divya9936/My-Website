export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        Open to new opportunities. Feel free to reach out!
      </p>
      <div className="contact-info" style={{marginBottom: '2rem', color: 'var(--text-secondary)'}}>
        <p>Email: <a href="mailto:divyadxt02@gmail.com" style={{color: 'var(--accent)'}}>divyadxt02@gmail.com</a></p>
      </div>
      <div className="contact-links">
        <a href="mailto:divyadxt02@gmail.com" className="btn btn-primary">Say Hello</a>
        <a href="https://www.linkedin.com/in/divya-dixit/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
        <a href="https://github.com/divya9936" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
      </div>
    </div>
  );
}