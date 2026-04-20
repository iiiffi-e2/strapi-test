import type { HomePageViewModel } from "@/content/home-page-view-model";
import { DEFAULT_HOME_PAGE, FALLBACK_IMAGES } from "@/content/default-home-page";

function str(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function mediaUrl(media: unknown, base: string): string | null {
  if (!media) return null;
  let obj: unknown = media;
  if (typeof obj === "object" && obj !== null && "data" in obj) {
    const d = (obj as { data: unknown }).data;
    if (d && typeof d === "object") obj = d;
  }
  if (typeof obj === "object" && obj !== null && "url" in obj && typeof (obj as { url: unknown }).url === "string") {
    const u = (obj as { url: string }).url;
    if (!u) return null;
    if (u.startsWith("http")) return u;
    return `${base.replace(/\/$/, "")}${u}`;
  }
  return null;
}

function asRecordArray(v: unknown): Record<string, unknown>[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is Record<string, unknown> => x !== null && typeof x === "object");
}

export function mapStrapiPayloadToViewModel(payload: Record<string, unknown>, baseUrl: string): HomePageViewModel {
  const d = DEFAULT_HOME_PAGE;

  const heroRaw = payload.hero;
  const hero =
    heroRaw && typeof heroRaw === "object"
      ? (heroRaw as Record<string, unknown>)
      : {};

  const heroImage = mediaUrl(hero.image, baseUrl) ?? d.hero.imageUrl;

  const programsRaw = asRecordArray(payload.servicePrograms);
  const servicePrograms =
    programsRaw.length > 0
      ? programsRaw.map((p, i) => {
          const featsRaw = asRecordArray(p.features);
          const feats =
            featsRaw.length > 0
              ? featsRaw.map((f) => ({
                  t: str(f.title),
                  d: str(f.description),
                }))
              : d.servicePrograms[i]?.feats ?? [];

          const img = mediaUrl(p.image, baseUrl) ?? FALLBACK_IMAGES.services[i % FALLBACK_IMAGES.services.length];

          return {
            id: str(p.documentId, `program-${i}`) || `program-${i}`,
            tab: str(p.tabLabel, d.servicePrograms[i]?.tab ?? `Program ${i + 1}`),
            title: str(p.title, d.servicePrograms[i]?.title ?? ""),
            lede: str(p.lede, d.servicePrograms[i]?.lede ?? ""),
            feats,
            imageUrl: img,
            imageBadge: str(p.imageBadge, d.servicePrograms[i]?.imageBadge ?? "Program"),
            imageCaption: str(p.imageCaption, p.tabLabel as string) || str(p.tabLabel) || d.servicePrograms[i]?.imageCaption || "",
          };
        })
      : d.servicePrograms;

  const missionValsRaw = asRecordArray(payload.missionValues);
  const missionValues =
    missionValsRaw.length > 0
      ? missionValsRaw.map((m, i) => ({
          num: str(m.numberLabel, d.missionValues[i]?.num ?? ""),
          t: str(m.title, d.missionValues[i]?.t ?? ""),
          d: str(m.description, d.missionValues[i]?.d ?? ""),
        }))
      : d.missionValues;

  const statRaw = asRecordArray(payload.statCells);
  const statCells =
    statRaw.length > 0
      ? statRaw.map((s, i) => ({
          statMain: s.statMain !== undefined && s.statMain !== null ? str(s.statMain) : d.statCells[i]?.statMain,
          statEmphasis:
            s.statEmphasis !== undefined && s.statEmphasis !== null ? str(s.statEmphasis) : d.statCells[i]?.statEmphasis,
          statLabel: str(s.statLabel, d.statCells[i]?.statLabel ?? ""),
        }))
      : d.statCells;

  const locRaw = asRecordArray(payload.locationCards);
  const locationCards =
    locRaw.length > 0
      ? locRaw.map((l, i) => ({
          city: str(l.city, d.locationCards[i]?.city ?? ""),
          state: str(l.state, d.locationCards[i]?.state ?? ""),
          addr: str(l.address, d.locationCards[i]?.addr ?? ""),
          tag: str(l.tag, d.locationCards[i]?.tag ?? ""),
        }))
      : d.locationCards;

  const navRaw = asRecordArray(payload.navLinks);
  const navLinks =
    navRaw.length > 0
      ? navRaw.map((n, i) => ({
          label: str(n.label, d.navLinks[i]?.label ?? ""),
          href: str(n.href, d.navLinks[i]?.href ?? "#"),
        }))
      : d.navLinks;

  const footerColsRaw = asRecordArray(payload.footerColumns);
  const footerColumns =
    footerColsRaw.length > 0
      ? footerColsRaw.map((col, i) => {
          const linksRaw = asRecordArray(col.links);
          const defCol = d.footerColumns[i];
          const links =
            linksRaw.length > 0
              ? linksRaw.map((link, j) => ({
                  label: str(link.label, defCol?.links[j]?.label ?? ""),
                  href: str(link.href, defCol?.links[j]?.href ?? "#"),
                }))
              : defCol?.links ?? [];
          return {
            title: str(col.title, defCol?.title ?? ""),
            links,
          };
        })
      : d.footerColumns;

  const legalRaw = asRecordArray(payload.footerLegalLinks);
  const footerLegalLinks =
    legalRaw.length > 0
      ? legalRaw.map((l, i) => ({
          label: str(l.label, d.footerLegalLinks[i]?.label ?? ""),
          href: str(l.href, d.footerLegalLinks[i]?.href ?? "#"),
        }))
      : d.footerLegalLinks;

  const missionImageUrl = mediaUrl(payload.missionImage, baseUrl) ?? d.missionImageUrl;

  return {
    siteName: str(payload.siteName, d.siteName),
    hero: {
      eyebrow: str(hero.eyebrow, d.hero.eyebrow),
      titlePrefix: str(hero.titlePrefix, d.hero.titlePrefix),
      titleEmphasis: str(hero.titleEmphasis, d.hero.titleEmphasis),
      lede: str(hero.lede, d.hero.lede),
      primaryCtaLabel: str(hero.primaryCtaLabel, d.hero.primaryCtaLabel),
      primaryCtaHref: str(hero.primaryCtaHref, d.hero.primaryCtaHref),
      secondaryCtaLabel: str(hero.secondaryCtaLabel, d.hero.secondaryCtaLabel),
      secondaryCtaHref: str(hero.secondaryCtaHref, d.hero.secondaryCtaHref),
      imageUrl: heroImage,
    },
    servicesEyebrow: str(payload.servicesEyebrow, d.servicesEyebrow),
    servicesTitlePrefix: str(payload.servicesTitlePrefix, d.servicesTitlePrefix),
    servicesTitleEmphasis: str(payload.servicesTitleEmphasis, d.servicesTitleEmphasis),
    servicesSubtitle: str(payload.servicesSubtitle, d.servicesSubtitle),
    servicePrograms,
    serviceProgramsCtaLabel: str(payload.serviceProgramsCtaLabel, d.serviceProgramsCtaLabel),
    serviceProgramsCtaHref: str(payload.serviceProgramsCtaHref, d.serviceProgramsCtaHref),
    missionEyebrow: str(payload.missionEyebrow, d.missionEyebrow),
    missionHeadingPrefix: str(payload.missionHeadingPrefix, d.missionHeadingPrefix),
    missionHeadingEmphasis: str(payload.missionHeadingEmphasis, d.missionHeadingEmphasis),
    missionParagraph1: str(payload.missionParagraph1, d.missionParagraph1),
    missionParagraph2: str(payload.missionParagraph2, d.missionParagraph2),
    missionImageUrl,
    missionImageBadge: str(payload.missionImageBadge, d.missionImageBadge),
    missionImageCaption: str(payload.missionImageCaption, d.missionImageCaption),
    missionValues,
    statsEyebrow: str(payload.statsEyebrow, d.statsEyebrow),
    statsTitlePrefix: str(payload.statsTitlePrefix, d.statsTitlePrefix),
    statsTitleEmphasis: str(payload.statsTitleEmphasis, d.statsTitleEmphasis),
    statsSubtitle: str(payload.statsSubtitle, d.statsSubtitle),
    statCells,
    locationsEyebrow: str(payload.locationsEyebrow, d.locationsEyebrow),
    locationsTitlePrefix: str(payload.locationsTitlePrefix, d.locationsTitlePrefix),
    locationsTitleEmphasis: str(payload.locationsTitleEmphasis, d.locationsTitleEmphasis),
    zipPlaceholder: str(payload.zipPlaceholder, d.zipPlaceholder),
    locationCards,
    newsletterHeadingPrefix: str(payload.newsletterHeadingPrefix, d.newsletterHeadingPrefix),
    newsletterHeadingEmphasis: str(payload.newsletterHeadingEmphasis, d.newsletterHeadingEmphasis),
    newsletterBody: str(payload.newsletterBody, d.newsletterBody),
    newsletterEmailPlaceholder: str(payload.newsletterEmailPlaceholder, d.newsletterEmailPlaceholder),
    newsletterButtonLabel: str(payload.newsletterButtonLabel, d.newsletterButtonLabel),
    newsletterPrivacyNote: str(payload.newsletterPrivacyNote, d.newsletterPrivacyNote),
    newsletterSuccessMessage: str(payload.newsletterSuccessMessage, d.newsletterSuccessMessage),
    navLinks,
    navSecondaryCtaLabel: str(payload.navSecondaryCtaLabel, d.navSecondaryCtaLabel),
    navSecondaryCtaHref: str(payload.navSecondaryCtaHref, d.navSecondaryCtaHref),
    navPrimaryCtaLabel: str(payload.navPrimaryCtaLabel, d.navPrimaryCtaLabel),
    navPrimaryCtaHref: str(payload.navPrimaryCtaHref, d.navPrimaryCtaHref),
    footerBrandTitle: str(payload.footerBrandTitle, d.footerBrandTitle),
    footerBrandTitleEmphasis: str(payload.footerBrandTitleEmphasis, d.footerBrandTitleEmphasis),
    footerTagline: str(payload.footerTagline, d.footerTagline),
    footerColumns,
    footerLegalLinks,
    footerCopyright: str(payload.footerCopyright, d.footerCopyright),
  };
}
