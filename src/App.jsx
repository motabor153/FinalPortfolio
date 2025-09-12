import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

export default function App() {
  const NAME = "I'm Matthew Otabor";
  const INTRO =
    "I'm a UNC Charlotte Data Science student with full-stack development skills, Copilot Studio and Power Automate experience, and machine learning experience, passionate about using data to build creative and impactful solutions.";

  // --- Machine Learning: YouTube View Prediction (single project) ---
  const projects = [
    {
      title: "YouTube View Prediction (Still in Development)",
      description:
        "Predicts video view counts from metadata and engagement features. Compared tree-based regressors (Random Forest, XGBoost, LightGBM); tuned Random Forest performed best. R² (coefficient of determination) measures how much of the variation in views the model explains: 1.0 is perfect, 0.0 means no better than predicting the mean, and negative means worse than that baseline. I used R² on a validation set to compare models fairly.",
      image: `${import.meta.env.BASE_URL}R-squared.png`, // optional; shows skeleton if missing
      caption: "R² on validation by model — Random Forest (tuned) ranked highest.",
      tags: ["Python", "Scikit-Learn", "Random Forest", "Regression"],
      demo: "" // optional if you host a notebook/report later
    },
    {
      title: "DTSC Project 1 — Income & Risk Modeling (Finished School Project)",
      description:
        "The data we’ve analyzed contains 6 metrics from 48,842 individuals, recorded by the U.S. Census. Using the data about the individuals, a Support Vector Machine model was developed to predict whether an individual earned more than $50,000, or not",
      image: `${import.meta.env.BASE_URL}dtsc1-cover.png`,
      caption: "Data visualization showing comparison of models used",
      tags: ["SVM-RBF", "Decision Tree", "Logistic Regression", "Classification"],
      fit: "contain",
      links: [
        { label: "Report (PDF)", href: `${import.meta.env.BASE_URL}Project%201%20Report.pdf` },
        { label: "Notebook (.ipynb)", href: `${import.meta.env.BASE_URL}DTSC_Project1.ipynb`, download: "DTSC_Project1.ipynb" }

      ]
    },
    {
  title: "DTSC Project 2 — Public Safety Modeling (Finished School Project)",
  description:
    "Two tasks using Charlotte open data: (1) predict property loss from fire incidents (regression with engineered time/location features) and (2) predict homicide case clearance (classification). Explored Logistic Regression (with bagging), Decision Trees/Bagged Trees, Random Forest, XGBoost, kNN, and SVM (RBF).",
  youtubeId: "https://youtu.be/hDBylXWHdVo",
  caption: "Presentation recording",
  tags: ["Logistic Regression", "Decision Tree", "Random Forest", "XGBoost", "SVM-RBF"],
  fit: "contain",  // keep full chart visible if you add a thumbnail
  links: [
    { label: "Report (PDF)",      href: `${import.meta.env.BASE_URL}Project%202%20DTSC.pdf` },
    { label: "Notebook (.ipynb)", href: `${import.meta.env.BASE_URL}project2.ipynb`, download: "project2.ipynb" }
  ]
},
{
  title: "Data Mining Project 1 — Course Website",
  description:
    "Course project site summarizing data prep/EDA and model comparison with clear visuals and write-ups.",
  image: `${import.meta.env.BASE_URL}project1datamine.png`, // or remove to show skeleton
  caption: "Live site hosted on GitHub Pages. (Click screenshot to go to site)",
  tags: ["HTML","Canva AI", "Data Mining"],
  fit: "contain",
  mediaHref: "https://motabor153.github.io/project1datamining/",
  links: [
    { label: "Live site", href: "https://motabor153.github.io/project1datamining/" },
    { label: "Repo", href: "https://github.com/motabor153/project1datamining" } 
  ]
}
  ];

  return (
    <>
      <Nav
        socials={{
          linkedin: "https://www.linkedin.com/in/matthew-otabor-99738b328/",
          github: "https://github.com/matt0219",
          email: "motabor153@gmail.com"
        }}
      />

      <Hero name={NAME} intro={INTRO} />

      <main className="container stack" style={{ padding: "40px 0" }}>
        {/* About */}
        <section id="about-me">
          <h2>About Me</h2>
          <p style={{ color: "#98a2b3" }}>
            Hi there! I'm a Data Science major at the University of North Carolina at
            Charlotte, excited about solving problems with data and technology. My journey
            into tech kicked off with a Web Development Coding Bootcamp at UNC Chapel Hill,
            where I learned to build full-stack applications and honed my skills in Python,
            JavaScript, React, and SQL/NoSQL databases.
          </p>
          <p style={{ color: "#98a2b3" }}>
            I’m passionate about growing in data science and using my skills to make a
            difference. Whether it’s diving deeper into machine learning or coding the next
            app, I’m all about learning and contributing along the way.
          </p>
          <h3 className="muted small" style={{ marginTop: 8 }}>Some highlights</h3>
          <ul className="list" style={{ color: "#98a2b3" }}>
            <li>Built portfolio projects including a full-stack app and API-driven client app.</li>
            <li>Always learning: from web development to analytics and ML.</li>
            <li>Strong teamwork/communication from roles in lifeguarding, fitness ops, and logistics.</li>
          </ul>
        </section>

        {/* Machine Learning Projects */}
        <section id="projects">
          <h2>Machine Learning Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact</h2>
          <p style={{ color: "#98a2b3" }}>
            Email me at <a href="mailto:motabor153@gmail.com">motabor153@gmail.com</a>.
          </p>
        </section>
      </main>

      <footer className="container footer">© {new Date().getFullYear()} {NAME}</footer>
    </>
  );
}
