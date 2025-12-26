const styles = {
  app: {
    fontFamily: "Inter, sans-serif",
    background: "#fafafa"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    position: "sticky",
    top: 0,
    background: "#fff"
  },
  navLinks: {
    display: "flex",
    gap: "1rem"
  },
  navBtn: {
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  section: {
    padding: "5rem 2rem",
    maxWidth: 1000,
    margin: "0 auto"
  },
  hero: {
    textAlign: "center",
    padding: "6rem 0"
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
    gap: "1rem"
  },
  skillCard: {
    background: "#fff",
    padding: "1rem",
    borderRadius: 8,
    textAlign: "center"
  },
  projectGrid: {
    display: "grid",
    gap: "1.5rem"
  },
  projectCard: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: 10
  },
  projectLinks: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem"
  },
  footer: {
    textAlign: "center",
    padding: "2rem",
    color: "#666"
  }
};

export default styles;
