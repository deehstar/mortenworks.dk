import React from 'react';
import './projectcard.css';
import githubIcon from '../../assets/github-icon.png'; // Import GitHub icon

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies && project.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.icon}
              alt={tech.name}
              className="technology-icon"
              title={tech.name}
            />
          ))}
        </div>
        {/* GitHub Icon Link */}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub Repository" className="github-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
