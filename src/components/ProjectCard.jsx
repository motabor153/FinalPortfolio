export default function ProjectCard({
  title,
  description,
  image,               // e.g. `${import.meta.env.BASE_URL}chart.png`
  tags = [],
  status = "",
  github,
  demo,
  caption,
  fit = "cover",
  ratio = "16 / 9",
  position = "center",
  links = []           // <-- you already have this prop
}) {
  return (
    <article className="card project-card">
      <div className="frame" style={{ aspectRatio: ratio }}>
        {status && <span className="pill">{status}</span>}

        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            style={{ width:"100%", height:"100%", objectFit:fit, objectPosition:position, display:"block" }}
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

      {/* NEW: link chips with download support */}
{links.length > 0 && (
  <div className="link-row">
    {links.map((l) => {
      const isDownload = !!l.download; // if provided, trigger download
      return (
        <a
          key={l.label}
          className="chip-link"
          href={l.href}
          {...(isDownload
            ? { download: l.download }           // e.g. "dtsc1-notebook.ipynb"
            : { target: "_blank", rel: "noreferrer" })}
        >
          {l.label}
        </a>
      );
    })}
  </div>
)}
    </article>
  );
}
