export default function ProjectCard({
  title,
  description,
  image,               // e.g. `${import.meta.env.BASE_URL}chart.png`
  tags = [],
  status = "",         // e.g. "In progress"
  github,              // e.g. "https://github.com/you/repo" (unused for now)
  demo,                // optional live URL (unused for now)
  caption,             // short line under the image
  fit = "cover",       // "cover" | "contain"
  ratio = "16 / 9",    // keep uniform card height; can be "auto"
  position = "center"  // e.g. "center top" if using cover
}) {
  return (
    <article className="card project-card">
      <div className="frame" style={{ aspectRatio: ratio }}>
        {status && <span className="pill">{status}</span>}

        {/* Show image if available, otherwise skeleton */}
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: fit,        // key: use "contain" for full chart
              objectPosition: position,
              display: "block"
            }}
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

      {caption && <p className="small muted" style={{ marginTop: 6 }}>{caption}</p>}

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
    </article>
  );
}
