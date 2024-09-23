import React from "react";
import Project from "./Project";

const projectsData = [
  // Add your project data here, follow the same structure as below:
  {
    id: 1,
    title: "Project One",
    description: "This is the first project.",
    link: "http://example.com",
    repo: "http://github.com",
  },
];

const Portfolio = () => {
  // This is the Portfolio component that renders the portfolio page
  return (
    <div className="port">
      <h1 style={{ textDecoration: "underline" }}>Portfolio</h1>
      <div>
        {projectsData.map(
          (
            project // Render each project as a Project component with its data
          ) => (
            <Project key={project.id} project={project} />
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
