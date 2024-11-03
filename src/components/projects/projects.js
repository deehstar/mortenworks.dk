// Projects.js
import React, { useRef, useEffect } from 'react';
import ProjectCard from '../project-card/projectcard';
import projectData from '../../data/projectData';
import './projects.css';

const Projects = () => {
  const carouselRef = useRef(null);

  const handleScroll = (e) => {
  if (carouselRef.current) {
    e.preventDefault();
    const isMobile = window.innerWidth <= 768; // Adjust the width as needed
    const scrollSpeed = isMobile ? 2 : 10; // Slower speed on mobile
    carouselRef.current.scrollLeft += e.deltaY * scrollSpeed;
  }
};


  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleScroll);
      return () => carousel.removeEventListener('wheel', handleScroll);
    }
  }, []);

  return (
    <section id="projects" className="projects-container">
      <div className="carousel" ref={carouselRef}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
