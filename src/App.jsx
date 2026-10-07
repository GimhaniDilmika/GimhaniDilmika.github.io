import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("gimhani-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("gimhani-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((value) => (value === "dark" ? "light" : "dark"));

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
      <motion.button
        className="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -4 }}
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </div>
  );
}
