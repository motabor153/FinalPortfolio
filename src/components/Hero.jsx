import React, { useState } from "react";

export default function Hero({ name, intro }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Points to /avatar.JPG in dev, /RepoName/avatar.JPG in GitHub Pages
  const photoSrc = `${import.meta.env.BASE_URL}avatar.JPG`;

  return (
    <section className="container hero">
      <div className="hero-grid">
        {/* Left: text */}
        <div>
          <div className="kicker">Welcome</div>
          <h1>{name}</h1>
          <p className="lead">{intro}</p>

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
