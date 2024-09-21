import React from "react";

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a
        href="https://docs.google.com/document/d/19EGhJX6VmYzs578CwG9zGtzoFHI5vepM4MvXLySdQeY/pub"
        download
      >
        Download Resume
      </a>
      <div className="resume-highlights">
        <h2>Full-Stack Developer</h2>
        <h3>Skills</h3>
        <ul>
          <li>
            JavaScript, CSS, HTML5, React, Node, Express, Postgres, MongoDB,
            GraphQL, SQL, NoSQL, APIs, PWA and more!
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
