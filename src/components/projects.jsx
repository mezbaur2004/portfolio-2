import React, { useState, useEffect } from "react";
import URL from "../assets/variables.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(`${URL}/projects`)
      .then((response) => {
        console.log(response.data); // Inspect the response
        setProjects(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const projectsToShow = Array.isArray(projects) ? projects.slice(0, 2) : []; // Ensure it's an array

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-warning">My Projects</h2>
        {projects.length > 0 ? (
          // Render this if `projects` array has items
          <head></head>
        ) : (
          // Render this if `projects` array is empty
          <p>No projects available.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
