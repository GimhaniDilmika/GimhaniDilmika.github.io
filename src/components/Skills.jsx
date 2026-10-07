import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaBrain, FaMobileAlt } from "react-icons/fa";
import { skillGroups, learning } from "../data";

const icons = [FaCode, FaMobileAlt, FaDatabase, FaBrain, FaTools];

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <span>TECH STACK</span>
          <h2>Tools I use to <em>build.</em></h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="skill-title"><Icon /><h3>{group.title}</h3></div>
                <div className="tag-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="learning-strip">
          <div>
            <span className="learning-label">CURRENTLY EXPLORING</span>
            <h3>Always learning, always improving.</h3>
          </div>
          <div className="learning-tags">
            {learning.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
