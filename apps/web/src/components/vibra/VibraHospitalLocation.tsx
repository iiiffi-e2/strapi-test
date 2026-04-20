"use client";

import Image from "next/image";
import { Fragment } from "react";

import type { HomePageViewModel } from "@/content/home-page-view-model";
import type { HospitalLocationViewModel } from "@/content/hospital-location-view-model";

import { VibraShell } from "./VibraShell";

type Props = {
  home: HomePageViewModel;
  loc: HospitalLocationViewModel;
};

export function VibraHospitalLocation({ home, loc }: Props) {
  const addrPrimary = [loc.addressLine1, loc.addressLine2].filter(Boolean).join(", ");
  const addrCityLine = [loc.city, loc.state].filter(Boolean).join(", ") + (loc.zip ? ` ${loc.zip}` : "");

  const showOverview =
    loc.overviewParagraph1 ||
    loc.overviewParagraph2 ||
    loc.pullQuote ||
    loc.sidebarRows.length > 0 ||
    loc.sidebarPrimaryCtaLabel;

  const showServices = loc.locationServices.length > 0;
  const showTeam = loc.teamMembers.length > 0;
  const showAdmissions = loc.admissionSteps.length > 0;
  const showVisit = Boolean(loc.visitMapEmbedUrl || loc.visitHours.length || loc.visitParkingNote);
  const showNearby = loc.nearbyLocations.length > 0;

  return (
    <VibraShell content={home}>
      <section className="loc-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="sep" aria-hidden>
              /
            </span>
            <a href="/#locations">Locations</a>
            <span className="sep" aria-hidden>
              /
            </span>
            <span>{loc.hospitalName}</span>
          </nav>

          <div className="loc-header">
            <div>
              {loc.heroEyebrow ? (
                <div className="section-eyebrow" style={{ marginBottom: 16 }}>
                  <span className="dot" aria-hidden />
                  <span className="eyebrow">{loc.heroEyebrow}</span>
                </div>
              ) : null}
              <h1>
                {loc.heroTitlePrefix || loc.hospitalName}
                {loc.heroTitleEmphasis ? <em> {loc.heroTitleEmphasis}</em> : null}
              </h1>
              {loc.metaChips.length > 0 ? (
                <div className="loc-meta-row">
                  {loc.metaChips.map((c, i) => (
                    <span key={`${c.label}-${i}`} className={`chip${c.variant === "ink" ? " ink" : ""}`}>
                      {c.label}
                    </span>
                  ))}
                </div>
              ) : null}
              {(addrPrimary || addrCityLine || loc.phone) && (
                <div className="loc-address">
                  {addrPrimary ? (
                    <div className="l1">
                      {addrPrimary}
                      {addrCityLine ? <br /> : null}
                    </div>
                  ) : null}
                  {addrCityLine ? <span>{addrCityLine}</span> : null}
                  {loc.phone ? (
                    <div style={{ marginTop: 10 }}>
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`}>{loc.phone}</a>
                    </div>
                  ) : null}
                </div>
              )}
              <div className="loc-actions">
                {loc.heroPrimaryCtaLabel ? (
                  <a className="btn btn-primary" href={loc.heroPrimaryCtaHref || "#"}>
                    {loc.heroPrimaryCtaLabel}
                  </a>
                ) : null}
                {loc.heroSecondaryCtaLabel ? (
                  <a className="btn btn-ghost" href={loc.heroSecondaryCtaHref || "#"}>
                    {loc.heroSecondaryCtaLabel}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="loc-hero-visual">
              <div className="placeholder">
                {loc.heroImageUrl ? (
                  <Image
                    src={loc.heroImageUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 45vw"
                    priority
                  />
                ) : null}
                <span className="ph-tag">Location</span>
                <span className="ph-label">{loc.city || loc.hospitalName}</span>
              </div>
            </div>
          </div>

          {loc.quickFacts.length > 0 ? (
            <div className="quick-facts" role="list">
              {loc.quickFacts.map((qf, idx) => (
                <div key={`${qf.statLabel}-${idx}`} className="quick-fact" role="listitem">
                  <span className="qf-n">
                    {qf.statMain ? <span>{qf.statMain}</span> : null}
                    {qf.statEmphasis ? <em>{qf.statEmphasis}</em> : null}
                  </span>
                  <span className="qf-l">{qf.statLabel}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {showOverview ? (
        <section id="overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-copy">
                {(loc.overviewEyebrow || loc.overviewHeadingPrefix || loc.overviewHeadingEmphasis) && (
                  <>
                    {loc.overviewEyebrow ? (
                      <div className="section-eyebrow">
                        <span className="dot" aria-hidden />
                        <span className="eyebrow">{loc.overviewEyebrow}</span>
                      </div>
                    ) : null}
                    <h2>
                      {loc.overviewHeadingPrefix}{" "}
                      {loc.overviewHeadingEmphasis ? <em>{loc.overviewHeadingEmphasis}</em> : null}
                    </h2>
                  </>
                )}
                {loc.overviewParagraph1 ? <p>{loc.overviewParagraph1}</p> : null}
                {loc.overviewParagraph2 ? <p>{loc.overviewParagraph2}</p> : null}
                {loc.pullQuote ? (
                  <blockquote className="pull-quote">
                    {loc.pullQuote}
                    {loc.pullQuoteAttribution ? <span className="attrib">{loc.pullQuoteAttribution}</span> : null}
                  </blockquote>
                ) : null}
              </div>
              {(loc.sidebarRows.length > 0 ||
                loc.sidebarPrimaryCtaLabel ||
                loc.sidebarSecondaryCtaLabel) && (
                <aside className="sidebar" aria-label="At a glance">
                  <h4>At a glance</h4>
                  {loc.sidebarRows.map((row, i) => (
                    <div key={`${row.label}-${i}`} className="row">
                      <span className="lab">{row.label}</span>
                      <span className="val">{row.value}</span>
                    </div>
                  ))}
                  {loc.sidebarPrimaryCtaLabel ? (
                    <a className="btn btn-primary" href={loc.sidebarPrimaryCtaHref || "#"}>
                      {loc.sidebarPrimaryCtaLabel}
                    </a>
                  ) : null}
                  {loc.sidebarSecondaryCtaLabel ? (
                    <a className="btn btn-ghost" href={loc.sidebarSecondaryCtaHref || "#"}>
                      {loc.sidebarSecondaryCtaLabel}
                    </a>
                  ) : null}
                </aside>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {showServices ? (
        <section id="loc-services">
          <div className="container">
            <div className="section-head">
              <div>
                {(loc.servicesEyebrow || loc.servicesHeadingPrefix || loc.servicesHeadingEmphasis) && (
                  <>
                    {loc.servicesEyebrow ? (
                      <div className="section-eyebrow">
                        <span className="dot" aria-hidden />
                        <span className="eyebrow">{loc.servicesEyebrow}</span>
                      </div>
                    ) : null}
                    <h2>
                      {loc.servicesHeadingPrefix}{" "}
                      {loc.servicesHeadingEmphasis ? <em>{loc.servicesHeadingEmphasis}</em> : null}
                    </h2>
                  </>
                )}
              </div>
            </div>
            <div className="loc-services-grid">
              {loc.locationServices.map((s, i) => (
                <article key={`${s.title}-${i}`} className="svc-card">
                  <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{s.title}</h3>
                  {s.description ? <p>{s.description}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showTeam ? (
        <section id="team">
          <div className="container">
            <div className="section-head">
              <div>
                {(loc.teamEyebrow || loc.teamHeadingPrefix || loc.teamHeadingEmphasis) && (
                  <>
                    {loc.teamEyebrow ? (
                      <div className="section-eyebrow">
                        <span className="dot" aria-hidden />
                        <span className="eyebrow">{loc.teamEyebrow}</span>
                      </div>
                    ) : null}
                    <h2>
                      {loc.teamHeadingPrefix} {loc.teamHeadingEmphasis ? <em>{loc.teamHeadingEmphasis}</em> : null}
                    </h2>
                  </>
                )}
              </div>
            </div>
            <div className="team-grid">
              {loc.teamMembers.map((m, i) => (
                <article key={`${m.name}-${i}`} className="team-card">
                  <div className="team-photo">
                    {m.photoUrl ? (
                      <Image src={m.photoUrl} alt="" fill className="object-cover" sizes="(max-width: 900px) 50vw, 22vw" />
                    ) : null}
                  </div>
                  <div className="t-name">{m.name}</div>
                  {m.role ? <div className="t-role">{m.role}</div> : null}
                  {m.bio ? <p className="t-bio">{m.bio}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showAdmissions ? (
        <section id="admissions">
          <div className="container">
            <div className="section-head">
              <div>
                {(loc.admissionsEyebrow || loc.admissionsHeadingPrefix || loc.admissionsHeadingEmphasis) && (
                  <>
                    {loc.admissionsEyebrow ? (
                      <div className="section-eyebrow">
                        <span className="dot" aria-hidden />
                        <span className="eyebrow">{loc.admissionsEyebrow}</span>
                      </div>
                    ) : null}
                    <h2>
                      {loc.admissionsHeadingPrefix}{" "}
                      {loc.admissionsHeadingEmphasis ? <em>{loc.admissionsHeadingEmphasis}</em> : null}
                    </h2>
                  </>
                )}
              </div>
              {loc.admissionsSubtitle ? <p className="section-sub">{loc.admissionsSubtitle}</p> : null}
            </div>
            <div className="steps">
              {loc.admissionSteps.map((st, i) => (
                <div key={`${st.title}-${i}`} className="step">
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{st.title}</h3>
                  <p>{st.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showVisit ? (
        <section id="visit">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-eyebrow">
                  <span className="dot" aria-hidden />
                  <span className="eyebrow">Visit</span>
                </div>
                <h2>
                  Plan your <em>visit</em>
                </h2>
              </div>
            </div>
            <div className="visit-grid">
              <div className="visit-map">
                {loc.visitMapEmbedUrl ? (
                  <iframe
                    title={`Map — ${loc.hospitalName}`}
                    src={loc.visitMapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="placeholder" style={{ height: "100%", minHeight: 280 }}>
                    <span className="ph-label">Add a map embed URL in the CMS</span>
                  </div>
                )}
              </div>
              <div className="visit-details">
                {(addrPrimary || addrCityLine) && (
                  <div className="visit-block">
                    <h4>Address</h4>
                    <p>
                      {addrPrimary ? (
                        <>
                          {addrPrimary}
                          <br />
                        </>
                      ) : null}
                      {addrCityLine || null}
                    </p>
                  </div>
                )}
                {loc.visitHours.length > 0 ? (
                  <div className="visit-block">
                    <h4>Visiting hours</h4>
                    <div className="hours-list">
                      {loc.visitHours.map((row, i) => (
                        <Fragment key={`${row.dayLabel}-${i}`}>
                          <span className="d">{row.dayLabel}</span>
                          <span className="t">{row.timeRange}</span>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ) : null}
                {loc.visitParkingNote ? (
                  <div className="visit-block">
                    <h4>Parking &amp; entry</h4>
                    <p className="muted">{loc.visitParkingNote}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {showNearby ? (
        <section id="nearby">
          <div className="container">
            <div className="locations-head">
              <div>
                {(loc.nearbyEyebrow || loc.nearbyHeadingPrefix || loc.nearbyHeadingEmphasis) && (
                  <>
                    {loc.nearbyEyebrow ? (
                      <div className="section-eyebrow">
                        <span className="dot" aria-hidden />
                        <span className="eyebrow">{loc.nearbyEyebrow}</span>
                      </div>
                    ) : null}
                    <h2>
                      {loc.nearbyHeadingPrefix} {loc.nearbyHeadingEmphasis ? <em>{loc.nearbyHeadingEmphasis}</em> : null}
                    </h2>
                  </>
                )}
              </div>
            </div>
            <div className="nearby-grid">
              {loc.nearbyLocations.map((n, i) => (
                <a key={`${n.href}-${i}`} href={n.href} className="location-card">
                  {n.tag ? <span className="lc-tag">{n.tag}</span> : null}
                  <div className="lc-city">{n.city}</div>
                  <div className="lc-state">{n.state}</div>
                  {n.addr ? <div className="lc-addr">{n.addr}</div> : null}
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </VibraShell>
  );
}
