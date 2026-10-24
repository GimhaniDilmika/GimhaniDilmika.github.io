import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { profile } from "../data";

export default function Contact() {
  const email = profile.email || "YOUR_EMAIL_HERE";
  const linkedin = profile.linkedin || "#";

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-wrap">
        <div className="contact-copy">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Have an idea?<br /><em>Let's build it.</em></h2>
          <p>
            I'm open to software engineering, full-stack, AI/ML, and related opportunities where I can
            contribute to real products, learn from experienced teams, and keep building.
          </p>
        </div>

        <div className="contact-panel">
          <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer">
            <span className="contact-icon"><FaGithub /></span>
            <span><small>GitHub</small><strong>GimhaniDilmika</strong></span>
            <FaArrowRight />
          </a>
          <a className="contact-row" href={linkedin === "#" ? undefined : linkedin} target="_blank" rel="noreferrer">
            <span className="contact-icon"><FaLinkedin /></span>
            <span><small>LinkedIn</small><strong>LinkedIn profile</strong></span>
            <FaArrowRight />
          </a>
          <a className="contact-row" href={profile.email ? `mailto:${profile.email}` : undefined}>
            <span className="contact-icon"><FaEnvelope /></span>
            <span><small>Email</small><strong>{email}</strong></span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
