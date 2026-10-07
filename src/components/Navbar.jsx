import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { profile } from "../data";

const links = [
  ["Home", "hero"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Contact", "contact"],
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      links.forEach(([, id]) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 140) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => go("hero")}>
            <span className="brand-mark">{profile.shortName}</span>
            <span>
              <strong>Gimhani</strong>
              <small>Dilmika</small>
            </span>
          </button>

          <nav className="desktop-nav">
            {links.map(([label, id]) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => go(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            <button
              className="menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {links.map(([label, id]) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => go(id)}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
