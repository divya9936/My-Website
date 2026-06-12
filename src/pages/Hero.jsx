export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <p className="hero-kicker">Full Stack Developer</p>
        <h1>Divya Dixit</h1>
        <h2 className="hero-subtitle">
          Building polished web products with React, WordPress, Python, and AI.
        </h2>
        <p className="hero-intro">
          2+ years delivering responsive, production-ready web apps across
          WordPress customizations, React SPAs, FastAPI backends, and AI/RAG
          solutions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            Explore Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let&apos;s Connect
          </a>
        </div>
        <div className="hero-tags" aria-label="Primary tech stack">
          <span>React.js</span>
          <span>WordPress</span>
          <span>FastAPI</span>
          <span>Python</span>
          <span>SCSS Modules</span>
          <span>Azure</span>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <div className="hero-cursor-glow"></div>
        <div className="hero-window">
          <div className="window-topbar">
            <span></span>
            <span></span>
            <span></span>
            <p>product-interface.tsx</p>
          </div>
          <div className="window-body">
            <div className="code-line w-80"></div>
            <div className="code-line w-50"></div>
            <div className="code-line w-92"></div>
            <div className="code-line w-60"></div>
            <div className="code-line w-74"></div>
          </div>
        </div>

        <div className="floating-card analytics-card">
          <p className="card-label">Experience</p>
          <h3>2+ Years</h3>
          <small>Full stack and WordPress</small>
        </div>

        <div className="floating-card ship-card">
          <p className="card-label">Delivery</p>
          <h3>4-5 Apps</h3>
          <small>Production-ready launches</small>
        </div>

        <div className="floating-card design-card">
          <p className="card-label">AI</p>
          <h3>RAG Chatbots</h3>
          <small>Retrieval Augmented Generation</small>
        </div>
      </div>
    </div>
  );
}
