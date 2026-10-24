import { motion } from 'framer-motion';
import { FaArrowRight, FaBrain, FaCloud, FaCode, FaDatabase, FaDownload, FaFolderOpen, FaGithub, FaGraduationCap, FaLaptopCode, FaLightbulb, FaPalette, FaReact, FaRocket, FaTools, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiNodedotjs, SiPython } from 'react-icons/si';
import { profile } from '../data';

const orbits = [
  { icon: <FaCode/>, label: 'Code', className: 'orb-1' },
  { icon: <FaCloud/>, label: 'Cloud', className: 'orb-2' },
  { icon: <FaDatabase/>, label: 'Databases', className: 'orb-3' },
  { icon: <FaBrain/>, label: 'AI', className: 'orb-4' },
  { icon: <FaLaptopCode/>, label: 'Development', className: 'orb-5' },
  { icon: <FaTools/>, label: 'DevOps', className: 'orb-6' },
];
const chips = [
  [<FaCode/>, 'Full-Stack Development'], [<FaPalette/>, 'UI/UX Design'],
  [<FaLightbulb/>, 'Problem Solving'], [<FaCloud/>, 'Cloud & DevOps'],
  [<FaDatabase/>, 'Databases'], [<FaBrain/>, 'AI / ML'],
];
const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

export default function Hero() {
  return <section id="hero" className="hero section neo-hero">
    <div className="hero-grid-bg" aria-hidden="true"/><div className="ambient ambient-a"/><div className="ambient ambient-b"/>
    <div className="container hero-content neo-hero-grid">
      <motion.div className="hero-copy" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
        <div className="eyebrow"><span className="status-dot"/> Available for opportunities</div>
        <p className="hero-kicker">WELCOME TO MY PORTFOLIO</p>
        <h1><span className="white-heading">Hello, I'm</span><br/><span className="gradient-heading">Gimhani Dilmika</span></h1>
        <h2>Computer Engineering <span>Undergraduate</span><i className="cursor"/></h2>
        <p className="hero-intro">{profile.intro} I love combining clean code, thoughtful design, and continuous learning to create useful digital experiences.</p>
        <div className="hero-actions">
          <a className="btn primary" href="/Gimhani-Dilmika-CV.pdf" download><FaDownload/> Download CV</a>
          <button className="btn secondary" onClick={()=>scrollTo('contact')}>Let's Connect <FaArrowRight/></button>
        </div>
        <div className="neo-skills">{chips.map(([icon,name])=><button key={name} className="neo-skill" onClick={()=>scrollTo('skills')}>{icon}<span>{name}</span></button>)}</div>
        <div className="hero-social"><span>CONNECT WITH ME</span><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope/></a></div>
      </motion.div>
      <motion.div className="hero-visual neo-visual" initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{duration:.85,delay:.15}}>
        <div className="visual-glow"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="neo-portrait-ring"><div className="neo-portrait-inner"><img src="/profile.jpg" alt="Portrait of Gimhani Dilmika"/></div></div>
        {orbits.map((item,i)=><motion.div key={item.label} className={`neo-orb ${item.className}`} title={item.label} animate={{y:[0,-8,0]}} transition={{duration:3+i*.31,repeat:Infinity,ease:'easeInOut'}}>{item.icon}</motion.div>)}
        <div className="portrait-ribbon">✦ BUILD <span>//</span> LEARN <span>//</span> GROW</div>
        <div className="neo-stats"><div><FaFolderOpen/><strong>17+</strong><span>Projects</span></div><div><FaGraduationCap/><strong>5</strong><span>Tech Areas</span></div><div><FaTools/><strong>3</strong><span>Research Tracks</span></div></div>
      </motion.div>
    </div>
    <div className="container neo-highlights">
      <a href="#about" className="neo-highlight"><div className="highlight-icon"><FaUserAlt/></div><strong>About Me</strong><p>Discover my journey, interests and what inspires me to build.</p><span>Get to know me <FaArrowRight/></span></a>
      <a href="#projects" className="neo-highlight"><div className="highlight-icon"><FaCode/></div><strong>Featured Projects</strong><p>Explore real applications, creative interfaces and useful solutions.</p><span>View projects <FaArrowRight/></span></a>
      <a href="#skills" className="neo-highlight"><div className="highlight-icon"><FaReact/></div><strong>Technical Skills</strong><p>React · JavaScript · Python · Node.js · Databases · Cloud</p><span>View all skills <FaArrowRight/></span></a>
      <a href="#contact" className="neo-highlight"><div className="highlight-icon"><FaRocket/></div><strong>Let's Work Together</strong><p>Open to internships, collaborations and meaningful projects.</p><span>Get in touch <FaArrowRight/></span></a>
    </div>
  </section>;
}
