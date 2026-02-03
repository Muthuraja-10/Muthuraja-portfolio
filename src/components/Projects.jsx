const Projects = () => {
  return (
    <section className="projects reveal" id="projects">
      <h2 className="section-title reveal">Projects</h2>
      <p className="section-subtitle reveal">
        Some of the work I’ve built
      </p>

      <div className="projects-grid">
        <div className="project-card reveal">
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio built with React, modern UI, and smooth animations.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card reveal">
          <h3>Full-Stack Web App</h3>
          <p>
            MERN stack application with authentication and REST APIs.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="project-card reveal">
          <h3>Landing Page</h3>
          <p>
            High-conversion landing page with responsive design.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
