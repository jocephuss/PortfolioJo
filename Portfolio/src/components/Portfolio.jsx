import React from "react";
import Project from "./Project";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "This is the first project.",
    link: "http://example.com",
    repo: "http://github.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project.",
    link: "http://example.com",
    repo: "http://github.com",
  },
];

const Portfolio = () => {
  return (
    <div className="port">
      <h2>My Portfolio</h2>
      <div>
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
