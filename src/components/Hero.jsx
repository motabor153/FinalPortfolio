import React, { useState } from "react";

export default function Hero({
  name,
  intro,
  ctaText = "Let’s get started →",
  ctaHref = "#contact",
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Points to /avatar.jpg in dev, /RepoName/avatar.jpg in GitHub Pages
  const photoSrc = `${import.meta.env.BASE_URL}avatar.JPG`;

  return (
    <section className="container hero">
      <div className="hero-grid">
        {/* Left: text */}
        <div>
          <div className="kicker">Welcome</div>
          <h1>{name}</h1>
          <p className="lead">{intro}</p>
          <a className="btn" href={ctaHref}>
            {ctaText}
          </a>

          {/* Logo wall */}
          <div className="logo-wall">
            <div className="label">Worked with</div>
            <div className="logos">
              <div className="logo">Equitable</div>
            </div>
          </div>
        </div>

        {/* Right: portrait */}
        <div>
          <div className="portrait">
            {(!loaded || error) && <div className="fallback">👋</div>}
            <img
              src={photoSrc}
              alt={`Portrait of ${name}`}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              style={{ display: error ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
