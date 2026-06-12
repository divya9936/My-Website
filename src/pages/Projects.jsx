import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const track = carouselRef.current;
    if (!track) return;

    const slide = track.children[index];
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const handleScroll = () => {
    const track = carouselRef.current;
    if (!track) return;

    const slides = Array.from(track.children);
    if (!slides.length) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    const frameId = window.requestAnimationFrame(handleScroll);

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % projects.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frameId);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="projects-carousel-section">
      <h2 className="section-title">Featured Projects</h2>
      <div
        className="projects-carousel-controls"
        aria-label="Project carousel controls"
      >
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
          aria-label="Previous project"
        >
          ←
        </button>
        <button
          type="button"
          className="carousel-arrow"
          onClick={() =>
            scrollToIndex(Math.min(activeIndex + 1, projects.length - 1))
          }
          aria-label="Next project"
        >
          →
        </button>
      </div>
      <div className="projects-carousel" ref={carouselRef}>
        {projects.map((project) => (
          <div
            className={`projects-carousel-slide ${projects[activeIndex]?.title === project.title ? "active" : ""}`}
            key={project.title}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div
        className="projects-carousel-dots"
        aria-label="Project carousel navigation"
      >
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-pressed={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
