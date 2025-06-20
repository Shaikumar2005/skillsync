import React from 'react';

function ProjectCard({ title, description, link }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;
