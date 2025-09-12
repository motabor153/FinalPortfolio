import { useRef } from "react";

// Accept an 11-char ID or any YouTube URL (watch/shorts/embed/youtu.be)
function extractYouTubeId(input) {
  if (!input) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) return input; // already an ID
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/
  ];
  for (const p of patterns) {
    const m = input.match(p);
    if (m) return m[1];
  }
  return null;
}

export default function ProjectCard({
  title,
  description,
  image,               // e.g. `${import.meta.env.BASE_URL}chart.png`
  video,               // self-hosted video path (mp4/webm) in /public
  poster,              // poster image for the <video>
  youtubeId,           // legacy: still supported (ID)
  youtube,             // ID or full YouTube URL
  useNoCookie = true,  // toggle youtube-nocookie.com vs youtube.com
  mediaHref,           // NEW: when set and using an image, make the image clickable
  tags = [],
  status = "",
  github,
  demo,
  caption,
  fit = "cover",
  ratio = "16 / 9",
  position = "center",
  links = []           // chips rendered below
}) {
  const skelRef = useRef(null);
  const showSkeleton = () => { if (skelRef.current) skelRef.current.style.display = "block"; };
  const hideSkeleton = () => { if (skelRef.current) skelRef.current.style.display = "none"; };

  const ytId = extractYouTubeId(youtube) || extractYouTubeId(youtubeId);
  const ytHost = useNoCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";

  // Prebuild the image element so we can optionally wrap it in a link
  const imageEl = image ? (
    <img
      src={image}
      alt={`${title} screenshot`}
      loading="lazy"
      style={{ width: "100%", height: "100%", objectFit: fit, objectPosition: position, display: "block" }}
      onLoad={hideSkeleton}
      onError={(e) => {
        e.currentTarget.style.display = "none";
        showSkeleton();
      }}
    />
  ) : null;

  return (
    <article className="card project-card">
      <div className="frame" style={{ aspectRatio: ratio }}>
        {status && <span className="pill">{status}</span>}

        {/* Priority: YouTube > self-hosted video > image (optionally linked) */}
        {ytId ? (
          <iframe
            title={`${title} video`}
            src={`${ytHost}/embed/${ytId}`}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={hideSkeleton}
          />
        ) : video ? (
          <video
            controls
            preload="metadata"
            poster={poster}
            onLoadedData={hideSkeleton}
            onError={showSkeleton}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/webm" />
          </video>
        ) : imageEl ? (
          mediaHref ? (
            <a
              href={mediaHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} — open site`}
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              {imageEl}
            </a>
          ) : (
            imageEl
          )
        ) : null}

        {/* Skeleton (hidden by default; shown only on error or before load) */}
        <div ref={skelRef} className="skeleton" style={{ display: "none" }}>
          <div className="shimmer" />
          <span className="skel-text">Media loading…</span>
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

      {/* link chips with download support */}
      {links.length > 0 && (
        <div className="link-row">
          {links.map((l) => {
            const isDownload = !!l.download;
            return (
              <a
                key={l.label}
                className="chip-link"
                href={l.href}
                {...(isDownload
                  ? { download: l.download }
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
