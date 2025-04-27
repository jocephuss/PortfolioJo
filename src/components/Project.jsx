import React from "react";

function Project({ project }) {
  return (
    <div className="links">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} />
      </a>
    </div>
  );
}

export default Project;
