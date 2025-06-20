import React from 'react';
import ProjectCard from '../Components/ProjectCard';

function Projects() {
  const projectList = [
    {
      title: "Human Tracking Bot",
      description: "Built using sensor fusion for real-time tracking.",
      link: "https://github.com/Shaikumar2005/human-tracking-bot"
    },
    {
      title: "Inventory Management System",
      description: "System to manage student inventories in colleges.",
      link: "https://github.com/Shaikumar2005/inventory-management"
    }
  ];

  return (
    <div className="container">
      <h2>My Projects</h2>
      {projectList.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </div>
  );
}

export default Projects;
