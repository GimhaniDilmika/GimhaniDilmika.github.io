import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaCode,
  FaGithub,
  FaLayerGroup,
  FaReact,
  FaLinkedin,
} from "react-icons/fa";
import { SiMongodb, SiNodedotjs, SiPython } from "react-icons/si";
import { profile } from "../data";

const floatItems = [
  { label: "React", icon: <FaReact /> },
  { label: "Node.js", icon: <SiNodedotjs /> },
  { label: "Python", icon: <SiPython /> },
  { label: "MongoDB", icon: <SiMongodb /> },
];

export default function Hero() {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero section">
      <div className="hero-grid-bg" />
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            Open to software engineering opportunities
          </div>

          <p className="hero-kicker">HELLO, I'M</p>
          <h1>
            Gimhani <span>Dilmika</span>
          </h1>
          <h2>{profile.role}</h2>
          <p className="hero-focus">{profile.focus}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <button className="btn primary" onClick={() => scroll("projects")}>
              Explore Projects <FaArrowRight />
            </button>
            <a className="btn secondary" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="btn secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>17+</strong><span>Projects</span></div>
            <div><strong>5</strong><span>Tech Areas</span></div>
            <div><strong>3</strong><span>Research Tracks</span></div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="profile-frame">
            <img src="/profile.jpg" alt="Gimhani Dilmika" />
            <div className="frame-label">
              <FaCode />
              <span>build • learn • improve</span>
            </div>
          </div>

          {floatItems.map((item, i) => (
            <motion.div
              key={item.label}
              className={`float-chip chip-${i + 1}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {item.icon}<span>{item.label}</span>
            </motion.div>
          ))}

          <div className="visual-card">
            <FaLayerGroup />
            <div>
              <strong>Building with purpose</strong>
              <span>Full-stack systems + AI applications</span>
            </div>
          </div>
          <div className="visual-card visual-card-two">
            <FaBrain />
            <div>
              <strong>Learning continuously</strong>
              <span>Cloud • DevOps • AI/ML</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
