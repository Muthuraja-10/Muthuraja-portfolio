const Services = () => {
  return (
    <section className="services reveal" id="services">
      <h2 className="section-title reveal">Services</h2>
      <p className="section-subtitle reveal">
        What I can help you build
      </p>

      <div className="services-grid">
        <div className="service-card reveal">
          <h3>Web Development</h3>
          <p>
            Modern, fast, and responsive websites built with clean and scalable code.
          </p>
        </div>

        <div className="service-card reveal">
          <h3>Full-Stack Applications</h3>
          <p>
            Complete web applications using React, Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="service-card reveal">
          <h3>UI / UX Design</h3>
          <p>
            User-focused interfaces that look great and work smoothly on all devices.
          </p>
        </div>

        <div className="service-card reveal">
          <h3>API & Backend</h3>
          <p>
            Secure REST APIs, authentication, and backend systems that scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
