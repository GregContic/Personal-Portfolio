
import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id || entry.target.tagName.toLowerCase();
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(sectionId));
          } else {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              newSet.delete(sectionId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const sections = [aboutRef, experienceRef, educationRef, projectsRef, contactRef, footerRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
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
      {/* Animated Background Particles */}
      <div className="bg-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>

          
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
        ref={aboutRef}
        id="about" 
        className={`about-section ${visibleSections.has('about') ? 'section-animate' : ''}`}
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
              
            </div>
          </div>
          <div className="skills-grid skills-row">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-icon" />
              HTML5
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-icon" />
              CSS3
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon" />
              JAVASCRIPT
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-icon" />
              TYPESCRIPT
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="skill-icon" />
              JAVA
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" />
              PYTHON
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="skill-icon" />
              SQL
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="NoSQL" className="skill-icon" />
              NOSQL
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="skill-icon" />
              C#
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="skill-icon" />
              C++
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon" />
              REACT
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-icon" />
              NODE.JS
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className={`experience-section ${visibleSections.has('experience') ? 'section-animate' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">WORK EXPERIENCE</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="experience-role">Systems and Technical Support</h3>
              <span className="experience-company">University of the Cordilleras</span>
              <span className="experience-dates">April 2024 - December 2024</span>
              <ul className="experience-details">
                <li>Gained hands-on experience diagnosing and fixing computer issues, including both hardware (e.g., RAM, hard drive replacements) and software (e.g., OS reinstallation, driver issues, virus removal).</li>
                <li>Provided technical support for school offices, PC setups, and other technical assistance, improving troubleshooting and communication skills.</li>

              </ul>
            </div>
            <div className="experience-item">
              <h3 className="experience-role">Frontend Developer Intern</h3>
              <span className="experience-company">Money Trees</span>
              <span className="experience-dates">May 2025 - July 2025</span>
              <ul className="experience-details">
                  <li>Developed and maintained core features of a mobile app using React Native, Expo, and Solito framework</li>
                  <li>Built responsive login, registration, and account verification flows with secure authentication handling</li>
                  <li>Engineered user-facing dashboards for customers to view, save, and book categorized services</li>
                  <li>Conducted QA testing and iterative debugging to ensure smooth app performance across Android and iOS</li>
                  <li>Refactored styling components for modularity and maintainability using Tailwind-like utility-first conventions</li>
                  <li>Utilized Git and GitHub for version control and workflow collaboration in an Agile setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={educationRef}
        id="education"
        className={`education-section ${visibleSections.has('education') ? 'section-animate' : ''}`}
      >
        <div className="container">
          <h2 className="education-title">EDUCATION</h2>
          <div className="education-flex">
            <div className={`education-card${visibleSections.has('education') ? ' education-card-animate' : ''}`}>
              <div className="education-header">
                <span className="education-school">University of the Cordilleras</span>
                <span className="education-location">Gov. Pack Rd. Baguio City</span>
              </div>
              <div className="education-details">
                <span className="education-degree">Bachelor of Science in Information Technology</span>
                <span className="education-honor">Dean's Lister</span>
              </div>
              <div className="education-details">
                <span className="education-degree"></span>
                <span className="education-degree"></span>
                <span className="education-degree">Senior High School STEM Track</span>
                <span className="education-honor">Graduated with Honors</span>
              </div>
            </div>
            <div className={`education-experience-text${visibleSections.has('education') ? ' education-text-animate' : ''}`}>
              <h3>My Experience at University of the Cordilleras</h3>
              <p>
                During my time at the University of the Cordilleras, I developed a strong foundation in information technology and problem-solving. As a Dean's Lister, I consistently maintained high academic performance while actively participating in various school activities and tech events. My senior high school years in the STEM track further honed my analytical and research skills, and graduating with honors was a testament to my dedication and perseverance.
              </p>
              <p>
                The university provided me with opportunities to collaborate with talented peers, work on real-world projects, and grow both technically and personally. These experiences have shaped my passion for technology and my drive to excel in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        id="projects" 
        className={`projects-section ${visibleSections.has('projects') ? 'section-animate' : ''}`}
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
        ref={contactRef}
        id="contact" 
        className={`contact-section ${visibleSections.has('contact') ? 'section-animate' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="contact-content">
            <p className="contact-text">READY TO START YOUR NEXT PROJECT?</p>
            <div className="contact-links">
              <a href="mailto:harrydenesia44@email.com" className="contact-link">
                <span>EMAIL</span>
                <span>harrydenesia44@email.com</span>
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
        ref={footerRef}
        className={`footer ${visibleSections.has('footer') ? 'section-animate' : ''}`}
      >
        <div className="container">
          <p>&copy; 2025 HARRY GREGSON DENESIA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
