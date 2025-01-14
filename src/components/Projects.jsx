import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'A cool project I built.' },
    { title: 'Project 2', description: 'Another amazing project.' },
    { title: 'Project 3', description: 'Yet another project.' },
    { title: 'Project 4', description: 'A fourth project.' },
  ];

  return (
    <section id="projects" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
}

export default Projects;