import { motion } from "framer-motion";
import { FaBrain, FaGraduationCap, FaLaptopCode, FaPalette } from "react-icons/fa";
import { profile } from "../data";

const cards = [
  { icon: <FaLaptopCode />, title: "Software Engineering", text: "Building practical web applications with clean frontend and backend workflows." },
  { icon: <FaBrain />, title: "AI & ML", text: "Exploring AI assistants, computer vision, intelligent systems, and applied machine learning." },
  { icon: <FaPalette />, title: "UI / UX", text: "Designing responsive interfaces with attention to usability, accessibility, and visual clarity." },
  { icon: <FaGraduationCap />, title: "Engineering Mindset", text: "Combining engineering fundamentals with hands-on projects and research." },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead tag="ABOUT ME" title="Turning ideas into" accent="working products." />
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="lead">{profile.about}</p>
            <div className="about-note">
              <span>01</span>
              <div><strong>University of Jaffna</strong><p>B.Sc. (Honours) in Computer Engineering</p></div>
            </div>
            <div className="about-note">
              <span>02</span>
              <div><strong>Career Direction</strong><p>Software Engineering, Full-Stack Development and AI/ML</p></div>
            </div>
          </motion.div>

          <div className="about-cards">
            {cards.map((card, i) => (
              <motion.article
                className="mini-card"
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mini-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ tag, title, accent }) {
  return (
    <motion.div
      className="section-head"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span>{tag}</span>
      <h2>{title} <em>{accent}</em></h2>
    </motion.div>
  );
}
