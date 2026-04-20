"use client";

import type { HomePageViewModel } from "@/content/home-page-view-model";
import { useEffect, useMemo, useState, type ReactNode } from "react";

function logoLetter(siteName: string): string {
  const t = siteName.trim();
  return (t.charAt(0) || "V").toUpperCase();
}

type Props = {
  content: HomePageViewModel;
  children: ReactNode;
};

export function VibraShell({ content, children }: Props) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mark = useMemo(() => logoLetter(content.siteName), [content.siteName]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${navScrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="/" className="logo" aria-label={`${content.siteName} home`}>
            <span className="logo-mark" aria-hidden>
              {mark}
            </span>
            {content.siteName}
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {content.navLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <a className="btn btn-ghost" href={content.navSecondaryCtaHref}>
              {content.navSecondaryCtaLabel}
            </a>
            <a className="btn btn-primary" href={content.navPrimaryCtaHref}>
              {content.navPrimaryCtaLabel}
            </a>
          </div>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mm-head">
            <span className="logo">
              <span className="logo-mark">{mark}</span>
              {content.siteName}
            </span>
            <button type="button" className="menu-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          {content.navLinks.map((link) => (
            <a key={`m-${link.href}-${link.label}`} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mm-actions">
            <a className="btn btn-ghost" href={content.navSecondaryCtaHref} onClick={() => setMenuOpen(false)}>
              {content.navSecondaryCtaLabel}
            </a>
            <a className="btn btn-primary" href={content.navPrimaryCtaHref} onClick={() => setMenuOpen(false)}>
              {content.navPrimaryCtaLabel}
            </a>
          </div>
        </div>
      ) : null}

      {children}

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-mark">{mark}</span>
                <h3>
                  {content.footerBrandTitle} <em>{content.footerBrandTitleEmphasis}</em>
                </h3>
              </div>
              <p>{content.footerTagline}</p>
            </div>
            {content.footerColumns.map((col, i) => (
              <div key={`${col.title}-${i}`} className="footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.href}-${link.label}`}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {content.footerCopyright}
            </span>
            <div className="links">
              {content.footerLegalLinks.map((link) => (
                <a key={`${link.label}-${link.href}`} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
