import React from "react";
import "../css/skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title text-warning">My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3>Front-End Development</h3>
            <p>HTML, CSS, ReactJS</p>
          </div>
          <div className="skill-item">
            <h3>State Management</h3>
            <p>React-Redux</p>
          </div>
          <div className="skill-item">
            <h3>Responsive Design</h3>
            <p>Bootstrap</p>
          </div>
          <div className="skill-item">
            <h3>Version Control</h3>
            <p>Git, GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
