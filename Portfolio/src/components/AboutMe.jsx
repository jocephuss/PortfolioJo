import React from "react";
import profileImage from "../assets/IMG_1766.jpg";

const AboutMe = () => {
  return (
    <section className="About">
      <div className="about-me">
        <img
          src={profileImage}
          alt="Profile Pic"
          style={{ width: "200px", height: "auto" }}
        />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Josiah, a passionate full stack developer with a love for
            problem-solving and a fascination with technology. Originally from
            Ohio, I recently made the move to Colorado, driven by my love for
            the outdoors. When I'm not coding, you can find me exploring nature,
            hiking, or spending time with family. Before diving into
            development, I earned two state certifications in water distribution
            and wastewater collection. My background in these fields taught me
            the importance of precision, problem-solving, and helping people in
            ways they may not even realize. These skills naturally transitioned
            into my work as a developer. What started as a curiosity about
            technology quickly became a full-blown passion, and now I find
            myself coding not just for work but for fun. I love the challenge of
            bringing ideas to life and creating solutions to problems through
            code. In addition to my technical skills, I thrive in team settings.
            I enjoy working with others to solve complex problems and build
            meaningful projects. At the same time, I value family and believe in
            maintaining a strong balance between my professional and personal
            life. Whether I'm collaborating on a new project, solving intricate
            problems, or just learning something new, I'm always driven by the
            excitement of what technology can do and how it can help others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
