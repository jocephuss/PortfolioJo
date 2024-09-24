import React from "react";

const Resume = () => {
  //This is the Resume component that renders the resume page
  return (
    // JSX for Resume component below , styled with CSS in App.css
    <div className="resume-container">
      <header className="resume-header">
        <h1>Full Stack Developer</h1>
        <p>1275 Escalante Dr, Durango, CO 81303</p>
        <p>(330) 432-2825 | rowlandjosiah14@gmail.com</p>
      </header>

      <section className="resume-section">
        <h3>Summary</h3>
        <p>
          Innovative and results-driven Full Stack Developer with comprehensive
          experience in designing, developing, and deploying web applications.
          Proficient in both Front-End & Back-End technologies. A love for
          problem solving and computer science. Skilled in building robust and
          scalable solutions using modern JavaScript frameworks, databases, and
          API development. Strong understanding of regex for advanced validation
          and pattern-matching. Eager to leverage technical expertise to drive
          impactful projects in a collaborative environment.
        </p>
      </section>

      <section className="resume-section">
        <h3>Front-End Developer</h3>
        <ul>
          <li>
            Developed responsive and interactive user interfaces using React,
            HTML5, and CSS3.
          </li>
          <li>
            Ensured cross-browser compatibility and mobile responsiveness for
            all web applications.
          </li>
          <li>
            Worked with UI designs and brought wireframes to life with
            frameworks such as Bootstrap.
          </li>
          <li>
            Contributed to improving front-end build processes and development
            workflows.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Back-End Developer</h3>
        <ul>
          <li>
            Designed and developed server-side applications using Node.js,
            Express.js, PostgresSQL, and MongoDB.
          </li>
          <li>
            Built and maintained secure RESTful APIs to support front-end
            applications and third-party integrations.
          </li>
          <li>
            Implemented database schemas and optimized queries for performance
            and scalability.
          </li>
          <li>
            Automated testing and deployment pipelines using tools like Jest and
            GitHub Actions.
          </li>
          <li>
            Conducted code reviews and collaborated with team members to ensure
            high-quality and maintainable codebases.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        <p>Student at Denver University</p>
      </section>

      <section className="resume-section">
        <h3>Experience</h3>
        <ul>
          <li>
            Developed and maintained full-stack web application using React,
            Node.js Express, PostgresSQL, and MongoDB.
          </li>
          <li>
            Designed and implemented RESTful APIs, ensuring seamless integration
            between front-end and back-end systems.
          </li>
          <li>
            Enhanced application performance and user experience by optimizing
            front-end components with React and CSS3.
          </li>
          <li>
            Utilized REGEX for advanced data validation and pattern matching in
            various application scenarios.
          </li>
          <li>
            Integrated third-party services and APIs to extend application
            functionality and streamline workflows.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Skills</h3>
        <ul>
          <li>Languages: JavaScript, HTML5, CSS, SQL, NoSQL</li>
          <li>
            Front-End Technologies: React.js, HTML5, CSS for Responsive Web
            Design
          </li>
          <li>
            Back-End Technologies: Node.js, Express.js, and RESTful API
            Development
          </li>
          <li>Databases: PostgresSQL, MongoDB, GraphQl,</li>
          <li>Tools & Platforms: Git, GitHub, VS Code, NPM, Jest</li>
          <li>
            Other Skills: REGEX, Agile Methodologies, Version Control, MERN
            stack.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Projects</h3>
        <ul>
          <li>
            Developed a full-stack e-commerce platform using React, Node.js,
            Express, and PostgresSQL. Implemented user authentication, shopping
            cart functionality, and payment processing using APIs.
          </li>
          <li>
            Built a CMS-style blog site with user authentication and CRUD
            functionality using Handlebars.js, Express, and PostgresSQL.
          </li>
          <li>Created a Social Networking API using a NoSQL database.</li>
          <li>
            Optimized database queries and server-side rendering to improve
            performance and SEO.
          </li>
          <li>Created a PWA text editor.</li>
          <li>
            Integrated session management with express-session and utilized
            Sequelize for ORM.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Additional Information</h3>
        <p>
          Open source contributor on GitHub with 21 repositories. Passionate
          about continuous learning and staying updated with the latest trends
          in web development.
        </p>
      </section>
    </div>
  );
};

export default Resume;
