const About = () => {
  return (
    <section className="about reveal" id="about">
      <div className="about-wrapper">
        
        {/* LEFT CONTENT */}
        <div className="about-text reveal reveal-left">
          <h2>About Me</h2>

          <p className="about-intro">
            I’m a <strong>Full-Stack Web Developer</strong> who enjoys building
            clean, scalable, and user-focused web applications.
          </p>

          <p>
            I help individuals and businesses turn ideas into real digital
            products using modern technologies. My focus is not just on writing
            code, but on creating solutions that are fast, secure, and easy to
            use.
          </p>

          <p>
            I enjoy working across the full stack — from crafting responsive
            user interfaces to designing robust backend systems.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-skills reveal reveal-right">
          <h3>What I Work With</h3>

          <div className="skills-grid">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Git & GitHub</span>
            <span>REST APIs</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
