/** Normalized props for <VibraHospitalLocation /> — from Strapi. */

export type HospitalMetaChip = { label: string; variant: "accent" | "ink" };

export type HospitalQuickFact = {
  statMain?: string;
  statEmphasis?: string;
  statLabel: string;
};

export type HospitalSidebarRow = { label: string; value: string };

export type HospitalLocationService = { title: string; description: string };

export type HospitalTeamMember = {
  name: string;
  role: string;
  bio: string;
  photoUrl: string | null;
};

export type HospitalAdmissionStep = { title: string; body: string };

export type HospitalHourRow = { dayLabel: string; timeRange: string };

export type HospitalNearbyLink = {
  tag: string;
  city: string;
  state: string;
  addr: string;
  href: string;
};

export type HospitalLocationViewModel = {
  hospitalName: string;
  slug: string;
  seoTitle: string;
  heroEyebrow: string;
  heroTitlePrefix: string;
  heroTitleEmphasis: string;
  heroLede: string;
  heroImageUrl: string | null;
  metaChips: HospitalMetaChip[];
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;
  quickFacts: HospitalQuickFact[];
  overviewEyebrow: string;
  overviewHeadingPrefix: string;
  overviewHeadingEmphasis: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  pullQuote: string;
  pullQuoteAttribution: string;
  sidebarRows: HospitalSidebarRow[];
  sidebarPrimaryCtaLabel: string;
  sidebarPrimaryCtaHref: string;
  sidebarSecondaryCtaLabel: string;
  sidebarSecondaryCtaHref: string;
  servicesEyebrow: string;
  servicesHeadingPrefix: string;
  servicesHeadingEmphasis: string;
  locationServices: HospitalLocationService[];
  teamEyebrow: string;
  teamHeadingPrefix: string;
  teamHeadingEmphasis: string;
  teamMembers: HospitalTeamMember[];
  admissionsEyebrow: string;
  admissionsHeadingPrefix: string;
  admissionsHeadingEmphasis: string;
  admissionsSubtitle: string;
  admissionSteps: HospitalAdmissionStep[];
  visitMapEmbedUrl: string;
  visitParkingNote: string;
  visitHours: HospitalHourRow[];
  nearbyEyebrow: string;
  nearbyHeadingPrefix: string;
  nearbyHeadingEmphasis: string;
  nearbyLocations: HospitalNearbyLink[];
};
