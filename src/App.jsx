import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat"; 
import useScrollReveal from "./hooks/useScrollReveal"; // 👈 ADD THIS

function App() {
  useScrollReveal(); // 👈 CALL IT HERE (IMPORTANT)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
