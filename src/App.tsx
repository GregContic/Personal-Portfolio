
import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate fade-in opacity for content sections
  const getContentOpacity = (threshold: number) => {
    return Math.min(1, Math.max(0, (scrollY - threshold) / 200));
  };

  const getContentTransform = (threshold: number) => {
    const progress = Math.min(1, Math.max(0, (scrollY - threshold) / 200));
    return `translateY(${(1 - progress) * 50}px)`;
  };

  return (
    <div className="rockstar-portfolio">
      {/* Hero Section */}
      <section className="hero-section" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="hero-profile">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="Harry Gregson Denesia" 
              className="hero-profile-image"
              style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
            />
          </div>
          <h1 className="hero-title" style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>HARRY GREGSON DENESIA</h1>
          <p className="hero-subtitle" style={{ opacity: Math.max(0, 1 - scrollY / 250) }}>WEB DEVELOPER & DESIGNER</p>
          <div className="hero-description" style={{ opacity: Math.max(0, 1 - scrollY / 200) }}>
            <p>CRAFTING DIGITAL EXPERIENCES WITH PRECISION AND STYLE</p>
          </div>
          <button className="cta-button" style={{ opacity: Math.max(0, 1 - scrollY / 150) }}>VIEW MY WORK</button>
        </div>
        <div className="hero-bg-overlay"></div>
      </section>

      {/* Navigation - appears as user scrolls */}
      <nav className={`navbar ${isScrolled ? 'navbar-visible' : ''}`}>
        <div className="nav-logo">
          <span className="logo-text">HARRY GREGSON DENESIA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section 
        id="about" 
        className="about-section"
        style={{
          opacity: getContentOpacity(400),
          transform: getContentTransform(400)
        }}
      >
        <div className="container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate web developer with expertise in creating immersive digital experiences. 
                Specializing in React, TypeScript, and modern web technologies, I build applications 
                that push the boundaries of what's possible on the web.
              </p>
              <p>
                With a keen eye for detail and a love for clean code, I transform ideas into 
                powerful, scalable solutions that deliver exceptional user experiences.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-item">REACT</div>
              <div className="skill-item">TYPESCRIPT</div>
              <div className="skill-item">NODE.JS</div>
              <div className="skill-item">CSS3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="projects-section"
        style={{
          opacity: getContentOpacity(800),
          transform: getContentTransform(800)
        }}
      >
        <div className="container">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" 
                  alt="Personal Portfolio"
                  className="project-bg-image"
                />
                <div className="project-overlay">
                  <h3>PERSONAL PORTFOLIO</h3>
                  <p>React • TypeScript • Vite</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop" 
                  alt="Weather Application"
                  className="project-bg-image"
                />
                <div className="project-overlay">
                  <h3>WEATHER APPLICATION</h3>
                  <p>React • API Integration • Responsive Design</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop" 
                  alt="Task Manager"
                  className="project-bg-image"
                />
                <div className="project-overlay">
                  <h3>TASK MANAGER</h3>
                  <p>Full Stack • Database • User Authentication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="contact-section"
        style={{
          opacity: getContentOpacity(1200),
          transform: getContentTransform(1200)
        }}
      >
        <div className="container">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="contact-content">
            <p className="contact-text">READY TO START YOUR NEXT PROJECT?</p>
            <div className="contact-links">
              <a href="mailto:gregcontic@email.com" className="contact-link">
                <span>EMAIL</span>
                <span>gregcontic@email.com</span>
              </a>
              <a href="https://github.com/GregContic" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>GITHUB</span>
                <span>GregContic</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="footer"
        style={{
          opacity: getContentOpacity(1400),
          transform: getContentTransform(1400)
        }}
      >
        <div className="container">
          <p>&copy; 2025 GREG CONTIC. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
