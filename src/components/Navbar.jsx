import { useEffect, useState } from "react";

const sections = ["home", "about", "services", "projects", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <h1 className="logo">MR WebServices</h1>

      <nav>
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
