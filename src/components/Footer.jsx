const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        
        {/* LEFT */}
        <div className="footer-brand">
          <h3>Muthuraja</h3>
          <p>
            Full-Stack Web Developer building modern, scalable, and
            user-focused web applications.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Muthuraja. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
