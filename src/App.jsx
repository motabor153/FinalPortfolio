import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  const NAME = "I'm Matthew Otabor";
  const INTRO =
    "I'm a UNC Charlotte Data Science student with full-stack development skills, Copilot Studio and Power Automate experience, and machine learning experience, passionate about using data to build creative and impactful solutions.";

  return (
    <>
      <Nav socials={{
        linkedin: "https://www.linkedin.com/in/matthew-otabor-99738b328/",
        github:   "https://github.com/matt0219",
        email:    "motabor153@gmail.com"
      }} />

      <Hero name={NAME} intro={INTRO} />

      {/* Stub sections to match navbar anchors (fill later) */}
      <main className="container stack" style={{padding:"40px 0"}}>
        <section id="about-me"><h2>About Me</h2><p style={{color:"#98a2b3"}}>Hi there! I'm a Data Science major at the University of North Carolina at Charlotte, excited about solving problems with data and technology. My journey into tech kicked off with a Web Development Coding Bootcamp at UNC Chapel Hill, where I learned to build full-stack applications and honed my skills in Python, JavaScript, React, and SQL/NoSQL databases.

Some of my favorite experiences so far:

Building Projects: I've created portfolio projects like a full-stack app and a client-side app using APIs, combining creativity with technical know-how.

Learning New Skills: From web development to data analysis, I’m always up for tackling new challenges and expanding my toolkit.

Teamwork: Whether lifeguarding, managing fitness operations, or working in warehouse logistics, I’ve developed strong communication and problem-solving skills in diverse environments.

I’m passionate about growing in data science and using my skills to make a difference. Whether it’s diving deeper into machine learning or coding the next big app, I’m all about learning and contributing along the way.</p></section>
        <section id="experience"><h2>Experience</h2><p style={{color:"#98a2b3"}}>Information Technology Intern at Equitable</p></section>
        <section id="projects"><h2>Projects</h2><p style={{color:"#98a2b3"}}>Coming soon.</p></section>
        <section id="contact"><h2>Contact</h2><p style={{color:"#98a2b3"}}>Email me at <a href="mailto:motabor153@gmail.com">motabor153@gmail.com</a>.</p></section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} {NAME}
      </footer>
    </>
  );
}
