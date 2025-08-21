export default function ProjectCard({
  title,
  description,
  image,               // e.g. `${import.meta.env.BASE_URL}projects/weather/cover.png`
  tags = [],
  status = "",         // e.g. "In progress"
  github,              // e.g. "https://github.com/you/weather-app"
  demo                 // optional live URL
}) {
  return (
    <article className="card project-card">
      <div className="frame">
        {status && <span className="pill">{status}</span>}

        {/* Show image if available, otherwise skeleton */}
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const skel = e.currentTarget.closest(".frame")?.querySelector(".skeleton");
              if (skel) skel.style.display = "block";
            }}
          />
        ) : null}
        <div className="skeleton" style={{ display: image ? "none" : "block" }}>
          <div className="shimmer" />
          <span className="skel-text">Screenshot coming soon</span>
        </div>
      </div>

      <header className="proj-head">
        <h3 className="proj-title">{title}</h3>
      </header>

      <p className="small">{description}</p>

      {tags.length > 0 && (
        <ul className="chips">
          {tags.map((t) => (
            <li className="badge" key={t}>{t}</li>
          ))}
        </ul>
      )}

      <div className="proj-links">
        {github && (
          <a className="btn btn-small" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {demo ? (
          <a className="btn btn-small" href={demo} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : (
          <button className="btn btn-small btn-ghost" title="Coming soon" disabled>
            Live demo
          </button>
        )}
      </div>
    </article>
  );
}
