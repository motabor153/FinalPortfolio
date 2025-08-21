import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

export default function App() {
  const NAME = "I'm Matthew Otabor";
  const INTRO =
    "I'm a UNC Charlotte Data Science student with full-stack development skills, Copilot Studio and Power Automate experience, and machine learning experience, passionate about using data to build creative and impactful solutions.";

  // --- Machine Learning projects ---
  const projects = [
    {
      title: "Customer Churn Prediction (Classification)",
      description:
        "Predicts which customers are likely to churn using feature engineering and model comparison (LogReg, XGBoost). Includes interpretability (SHAP) and a simple evaluation dashboard.",
      image: `${import.meta.env.BASE_URL}projects/ml/churn/cover.png`, // optional; shows skeleton if missing
      tags: ["Python", "scikit-learn", "XGBoost", "AUC ~0.89"],
      status: "Case study coming",
      github: "https://github.com/matt0219/churn-classifier", // <- replace
      demo: "" // optional if you host a report/app later
    },
    {
      title: "Image Classifier — CIFAR-10 (CNN)",
      description:
        "Convolutional neural network trained on CIFAR-10 with augmentation and early stopping. Tracks experiments and compares checkpoints; exports confusion matrix and misclassifications.",
      image: `${import.meta.env.BASE_URL}projects/ml/cifar10/cover.png`,
      tags: ["Python", "PyTorch/TensorFlow", "CNN", "Acc ~86%"],
      status: "In progress",
      github: "https://github.com/matt0219/cifar10-cnn", // <- replace
      demo: ""
    },
    {
      title: "House Price Prediction (Regression)",
      description:
        "End-to-end regression pipeline: data cleaning, feature scaling, model selection (Random Forest, XGBoost), cross-validation, and error analysis with partial dependence.",
      image: `${import.meta.env.BASE_URL}projects/ml/housing/cover.png`,
      tags: ["Python", "Pandas", "XGBoost", "RMSE TBD"],
      status: "Completed",
      github: "https://github.com/matt0219/housing-regression", // <- replace
      demo: ""
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
