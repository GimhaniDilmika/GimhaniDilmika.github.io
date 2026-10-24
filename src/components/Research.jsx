import { motion } from "framer-motion";
import { FaFlask, FaCloud, FaLeaf } from "react-icons/fa";
import { research } from "../data";

const icons = [FaCloud, FaLeaf, FaFlask];

export default function Research() {
  return (
    <section id="research" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <span>RESEARCH & ENGINEERING</span>
          <h2>Beyond projects, I <em>experiment.</em></h2>
        </div>

        <div className="research-grid">
          {research.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                className="research-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="research-icon"><Icon /></div>
                <span className="research-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
