import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div className="app">
      <div className="background-container"></div>
      <Navbar />
      <Section id="home"><Hero /></Section>
      <Section id="about"><About /></Section>
      <Section id="experience"><Experience /></Section>
      <Section id="skills"><Skills /></Section>
      <Section id="projects"><Projects /></Section>
      <Section id="contact"><Contact /></Section>
      <Footer />
    </div>
  );
}