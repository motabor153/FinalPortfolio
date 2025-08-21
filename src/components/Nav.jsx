export default function Nav({ socials = {}, repoBase = "/" }) {
  const items = [
    { label: "Home", href: "#top" },
    { label: "About Me", href: "#about-me" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header id="top" className="header">
      <div className="container nav">
        <nav className="row" style={{justifyContent:"space-between", width:"100%"}}>
          <div className="links row" style={{gap: "6px"}}>
            {items.map((it) => (
              <a key={it.label} href={it.href}>{it.label}</a>
            ))}
          </div>
          <div className="row" style={{gap:"8px"}}>
            {socials.linkedin && <a className="social" href={socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><span>in</span></a>}
            {socials.github &&   <a className="social" href={socials.github} aria-label="GitHub"   target="_blank" rel="noreferrer"><span>GH</span></a>}
            {socials.email &&    <a className="social" href={`mailto:${socials.email}`} aria-label="Email"><span>@</span></a>}
          </div>
        </nav>
      </div>
    </header>
  );
}
