
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <img src="https://avatars.githubusercontent.com/u/00000000?v=4" alt="Greg Contic" className="profile-pic" />
        <h1>Greg Contic</h1>
        <p className="subtitle">Web Developer & Designer</p>
      </header>
      <main>
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Hi! I'm Greg, a passionate web developer with a knack for building modern, responsive web applications. I love working with React, TypeScript, and creating beautiful user experiences.
          </p>
        </section>
        <section className="projects-section">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Personal Portfolio</strong> – This site! Built with React and Vite.
            </li>
            <li>
              <strong>Weather App</strong> – Real-time weather updates using public APIs.
            </li>
            <li>
              <strong>Task Manager</strong> – Productivity app for managing daily tasks.
            </li>
          </ul>
        </section>
        <section className="contact-section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:gregcontic@email.com">gregcontic@email.com</a></p>
          <p>GitHub: <a href="https://github.com/GregContic" target="_blank" rel="noopener noreferrer">GregContic</a></p>
        </section>
      </main>
    </div>
  );
};

export default App;
