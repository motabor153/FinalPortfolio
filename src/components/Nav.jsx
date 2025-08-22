import { useEffect } from "react";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./icons.jsx";

export default function Nav({ socials = {}, repoBase = "/" }) {
  const items = [
    { label: "Home", href: "#top" },
    { label: "About Me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".nav .links a"));
    if (!links.length) return;

    const hrefs = links
      .map((a) => a.getAttribute("href") || "")
      .filter((h) => h.startsWith("#"));

    const ids = hrefs.map((h) => h.slice(1));
    const contentIds = ids.filter((id) => id !== "top"); // exclude sticky header

    const sections = contentIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const setActive = (id) => {
      links.forEach((a) => {
        const match = a.getAttribute("href") === `#${id}`;
        a.classList.toggle("is-active", match);
        if (match) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
    };

    // Keep "Home" active when near the very top
    const handleTop = () => {
      if (window.scrollY < 120) setActive("top");
    };

    // Observe sections to highlight the one most in view
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));

    // Make clicks update active state immediately.
    // Special-case #top to force smooth scroll to the very top.
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute("href") || "";
      if (href === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("top");
        return;
      }
      if (href.startsWith("#")) setActive(href.slice(1));
    };
    links.forEach((a) => a.addEventListener("click", handleClick));

    // initial state
    handleTop();
    window.addEventListener("scroll", handleTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTop);
      links.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <header id="top" className="header">
      <div className="container nav">
        <nav className="row" style={{ justifyContent: "space-between", width: "100%" }}>
          <div className="links row" style={{ gap: "6px" }}>
            {items.map((it) => (
              <a key={it.label} href={it.href}>{it.label}</a>
            ))}
          </div>
          <div className="row" style={{ gap: "8px" }}>
            {socials.linkedin && (
              <a className="social" href={socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {socials.github && (
              <a className="social" href={socials.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                <GitHubIcon />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {socials.email && (
              <a className="social" href={`mailto:${socials.email}`} aria-label="Email">
                <MailIcon />
                <span className="sr-only">Email</span>
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
