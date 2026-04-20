"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { HomePageViewModel } from "@/content/home-page-view-model";

import { VibraShell } from "./VibraShell";

type Props = {
  content: HomePageViewModel;
};

export function VibraHome({ content }: Props) {
  const [activeService, setActiveService] = useState(0);
  const [newsletterOk, setNewsletterOk] = useState(false);

  const service = content.servicePrograms[activeService] ?? content.servicePrograms[0];

  useEffect(() => {
    if (activeService >= content.servicePrograms.length) {
      setActiveService(0);
    }
  }, [activeService, content.servicePrograms.length]);

  const heroSrc = content.hero.imageUrl || "";

  return (
    <VibraShell content={content}>
      <section className="hero hero-overlay">
        <div className="hero-media">
          {heroSrc ? (
            <Image src={heroSrc} alt="" fill priority className="object-cover" sizes="100vw" />
          ) : null}
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-eyebrow-row">
              <span className="dot" aria-hidden />
              <span className="eyebrow">{content.hero.eyebrow}</span>
            </div>
            <h1>
              {content.hero.titlePrefix} <em>{content.hero.titleEmphasis}</em>
            </h1>
            <p className="hero-lede">{content.hero.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={content.hero.primaryCtaHref}>
                {content.hero.primaryCtaLabel}
              </a>
              <a className="btn btn-ghost" href={content.hero.secondaryCtaHref}>
                {content.hero.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-eyebrow">
                <span className="dot" aria-hidden />
                <span className="eyebrow">{content.servicesEyebrow}</span>
              </div>
              <h2>
                {content.servicesTitlePrefix} <em>{content.servicesTitleEmphasis}</em> recovery
              </h2>
            </div>
            <p className="section-sub">{content.servicesSubtitle}</p>
          </div>

          <div className="tabs" role="tablist" aria-label="Service areas">
            {content.servicePrograms.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={activeService === i}
                className={`tab${activeService === i ? " active" : ""}`}
                onClick={() => setActiveService(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>

          <div className="service-view">
            <div className="service-detail">
              <h3>{service.title}</h3>
              <p className="service-lede">{service.lede}</p>
              <ul className="service-feats">
                {service.feats.map((f, idx) => (
                  <li key={`${service.id}-feat-${idx}`}>
                    <span className="feat-no">{String(idx + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="feat-t">{f.t}</div>
                      <div className="feat-d">{f.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a className="btn btn-text" href={content.serviceProgramsCtaHref}>
                {content.serviceProgramsCtaLabel}
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="service-visual">
              <div className="placeholder">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                ) : null}
                <span className="ph-tag">{service.imageBadge}</span>
                <span className="ph-label">{service.imageCaption || service.tab}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-copy">
              <div className="section-eyebrow">
                <span className="dot" aria-hidden />
                <span className="eyebrow">{content.missionEyebrow}</span>
              </div>
              <h2>
                {content.missionHeadingPrefix} <em>{content.missionHeadingEmphasis}</em> work
              </h2>
              <p>{content.missionParagraph1}</p>
              <p>{content.missionParagraph2}</p>
              <div className="mission-values">
                {content.missionValues.map((mv) => (
                  <div key={mv.num} className="mission-value">
                    <span className="mv-num">{mv.num}</span>
                    <div>
                      <div className="mv-t">{mv.t}</div>
                      <div className="mv-d">{mv.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-visual">
              <div className="placeholder">
                {content.missionImageUrl ? (
                  <Image
                    src={content.missionImageUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ) : null}
                <span className="ph-tag">{content.missionImageBadge}</span>
                <span className="ph-label">{content.missionImageCaption}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-eyebrow">
                <span className="dot" aria-hidden />
                <span className="eyebrow">{content.statsEyebrow}</span>
              </div>
              <h2>
                {content.statsTitlePrefix} <em>{content.statsTitleEmphasis}</em> at heart
              </h2>
            </div>
            <p className="section-sub">{content.statsSubtitle}</p>
          </div>

          <div className="stats-grid">
            {content.statCells.map((cell, idx) => (
              <div key={`${cell.statLabel}-${idx}`} className="stat-cell">
                <div className="stat-n">
                  {cell.statMain ? <span>{cell.statMain}</span> : null}
                  {cell.statEmphasis ? <em>{cell.statEmphasis}</em> : null}
                </div>
                <div className="stat-label">{cell.statLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations">
        <div className="container">
          <div className="locations-head">
            <div>
              <div className="section-eyebrow">
                <span className="dot" aria-hidden />
                <span className="eyebrow">{content.locationsEyebrow}</span>
              </div>
              <h2>
                {content.locationsTitlePrefix} <em>{content.locationsTitleEmphasis}</em>
              </h2>
            </div>
            <form
              className="zip-search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="zip" className="sr-only">
                ZIP code
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                inputMode="numeric"
                placeholder={content.zipPlaceholder}
                autoComplete="postal-code"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>

          <div className="location-grid">
            {content.locationCards.map((loc) => {
              const key = loc.href ?? `${loc.city}-${loc.state}-${loc.addr}`;
              const inner = (
                <>
                  <span className="lc-tag">{loc.tag}</span>
                  <div className="lc-city">{loc.city}</div>
                  <div className="lc-state">{loc.state}</div>
                  <div className="lc-addr">{loc.addr}</div>
                </>
              );
              return loc.href ? (
                <a key={key} href={loc.href} className="location-card">
                  {inner}
                </a>
              ) : (
                <article key={key} className="location-card">
                  {inner}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <div className="newsletter-card">
            <div>
              <h2>
                {content.newsletterHeadingPrefix}
                <em>{content.newsletterHeadingEmphasis}</em>
              </h2>
              <p>{content.newsletterBody}</p>
            </div>
            {newsletterOk ? (
              <div className="newsletter-form">
                <div className="success" role="status">
                  {content.newsletterSuccessMessage}
                </div>
              </div>
            ) : (
              <form
                className="newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterOk(true);
                }}
              >
                <div className="row">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={content.newsletterEmailPlaceholder}
                    autoComplete="email"
                  />
                  <button type="submit" className="btn btn-primary">
                    {content.newsletterButtonLabel}
                  </button>
                </div>
                <p className="note">{content.newsletterPrivacyNote}</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </VibraShell>
  );
}
