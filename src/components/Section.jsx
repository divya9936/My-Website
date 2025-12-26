import { useEffect, useRef, useState } from 'react';

export default function Section({ id, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    
    const currentElement = domRef.current;
    observer.observe(currentElement);
    
    return () => observer.unobserve(currentElement);
  }, []);

  return (
    <section 
      id={id} 
      className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}