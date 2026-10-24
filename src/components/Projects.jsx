import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "../data";

const categories = ["All", "Full Stack", "AI", "Mobile", "Web", "Systems", "Real Time"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );
  const visible = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span>SELECTED WORK</span>
          <h2>Projects that show how I <em>solve problems.</em></h2>
          <p>From classroom platforms and e-commerce systems to AI tools and real-time applications.</p>
        </div>

        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "filter active" : "filter"}
              onClick={() => { setFilter(cat); setShowAll(false); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-top">
                <span className="project-icon">{project.icon}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-actions">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Source
                  </a>
                ) : (
                  <span className="private-note">Project details</span>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="arrow-link" aria-label={`Open ${project.title}`}>
                    <FaArrowUpRightFromSquare />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length > 9 && (
          <button className="show-more" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show fewer projects" : `View all ${filtered.length} projects`}
          </button>
        )}
      </div>
    </section>
  );
}
