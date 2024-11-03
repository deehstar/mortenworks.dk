import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/projects/projects";
import Contact from "./components/Contact/contact";
import { useState, useEffect } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust based on when you want the section to be considered "active"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main className="scroll-container">
      <Intro />
      <About />
      <Projects />
      <Contact />
      </main>
    </div>
  );
};

export default App;
