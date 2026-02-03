import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-left reveal reveal-left">
          <h2 className="reveal">Hi, I'm Muthuraja 👋</h2>
          <h1 className="reveal">Full-Stack Web Developer</h1>

          <p className="reveal">
            I build modern, responsive websites and web applications
            that help businesses grow online.
          </p>

          {/* ✅ FIXED BUTTONS */}
          <div className="hero-buttons reveal">
            <a href="#contact" className="primary">
              Build Website With Me
            </a>

            <a href="#projects" className="secondary">
              View Projects
            </a>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="stat-card reveal">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card reveal">
              <h3>5+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="stat-card reveal">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card reveal">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right reveal reveal-right">
          <div className="hero-image">
            <img src={profile} alt="Muthuraja profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
