/** Normalized homepage props for <VibraHome /> — from Strapi or static defaults. */

export type ServiceFeature = { t: string; d: string };

export type ServiceProgram = {
  id: string;
  tab: string;
  title: string;
  lede: string;
  feats: ServiceFeature[];
  imageUrl: string | null;
  imageBadge: string;
  imageCaption: string;
};

export type MissionValue = { num: string; t: string; d: string };

export type StatCell = {
  statMain?: string;
  statEmphasis?: string;
  statLabel: string;
};

export type LocationCard = {
  city: string;
  state: string;
  addr: string;
  tag: string;
  /** When set (e.g. from hospital CMS), the card links to that location page. */
  href?: string;
};

export type NavLink = { label: string; href: string };

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type HomePageViewModel = {
  siteName: string;
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleEmphasis: string;
    lede: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    imageUrl: string | null;
  };
  servicesEyebrow: string;
  servicesTitlePrefix: string;
  servicesTitleEmphasis: string;
  servicesSubtitle: string;
  servicePrograms: ServiceProgram[];
  serviceProgramsCtaLabel: string;
  serviceProgramsCtaHref: string;
  missionEyebrow: string;
  missionHeadingPrefix: string;
  missionHeadingEmphasis: string;
  missionParagraph1: string;
  missionParagraph2: string;
  missionImageUrl: string | null;
  missionImageBadge: string;
  missionImageCaption: string;
  missionValues: MissionValue[];
  statsEyebrow: string;
  statsTitlePrefix: string;
  statsTitleEmphasis: string;
  statsSubtitle: string;
  statCells: StatCell[];
  locationsEyebrow: string;
  locationsTitlePrefix: string;
  locationsTitleEmphasis: string;
  zipPlaceholder: string;
  locationCards: LocationCard[];
  newsletterHeadingPrefix: string;
  newsletterHeadingEmphasis: string;
  newsletterBody: string;
  newsletterEmailPlaceholder: string;
  newsletterButtonLabel: string;
  newsletterPrivacyNote: string;
  newsletterSuccessMessage: string;
  navLinks: NavLink[];
  navSecondaryCtaLabel: string;
  navSecondaryCtaHref: string;
  navPrimaryCtaLabel: string;
  navPrimaryCtaHref: string;
  footerBrandTitle: string;
  footerBrandTitleEmphasis: string;
  footerTagline: string;
  footerColumns: FooterColumn[];
  footerLegalLinks: NavLink[];
  footerCopyright: string;
};
