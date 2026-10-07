import { FaGithub } from "react-icons/fa";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Computer Engineering • Software • AI/ML</p>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}
