import type { HospitalLocationViewModel } from "@/content/hospital-location-view-model";

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

function unwrapRecord(x: unknown): Record<string, unknown> | null {
  if (!x || typeof x !== "object") return null;
  const o = x as Record<string, unknown>;
  if (o.attributes && typeof o.attributes === "object") {
    return o.attributes as Record<string, unknown>;
  }
  return o;
}

function asRecordArray(v: unknown): Record<string, unknown>[] {
  let arr: unknown[] = [];
  if (Array.isArray(v)) arr = v;
  else if (v && typeof v === "object" && "data" in v && Array.isArray((v as { data: unknown }).data)) {
    arr = (v as { data: unknown[] }).data;
  }
  return arr.map(unwrapRecord).filter((x): x is Record<string, unknown> => x !== null);
}

export function mapStrapiHospitalPayload(payload: Record<string, unknown>, baseUrl: string): HospitalLocationViewModel {
  const heroImageUrl = mediaUrl(payload.heroImage, baseUrl);

  const chipsRaw = asRecordArray(payload.metaChips);
  const metaChips = chipsRaw.map((c) => ({
    label: str(c.label),
    variant: c.variant === "ink" ? ("ink" as const) : ("accent" as const),
  }));

  const qfRaw = asRecordArray(payload.quickFacts);
  const quickFacts = qfRaw.map((q) => ({
    statMain: q.statMain !== undefined && q.statMain !== null ? str(q.statMain) : undefined,
    statEmphasis: q.statEmphasis !== undefined && q.statEmphasis !== null ? str(q.statEmphasis) : undefined,
    statLabel: str(q.statLabel),
  }));

  const sidebarRaw = asRecordArray(payload.sidebarRows);
  const sidebarRows = sidebarRaw.map((r) => ({
    label: str(r.label),
    value: str(r.value),
  }));

  const svcRaw = asRecordArray(payload.locationServices);
  const locationServices = svcRaw.map((s) => ({
    title: str(s.title),
    description: str(s.description),
  }));

  const teamRaw = asRecordArray(payload.teamMembers);
  const teamMembers = teamRaw.map((t) => ({
    name: str(t.name),
    role: str(t.role),
    bio: str(t.bio),
    photoUrl: mediaUrl(t.photo, baseUrl),
  }));

  const stepsRaw = asRecordArray(payload.admissionSteps);
  const admissionSteps = stepsRaw.map((s) => ({
    title: str(s.title),
    body: str(s.body),
  }));

  const hoursRaw = asRecordArray(payload.visitHours);
  const visitHours = hoursRaw.map((h) => ({
    dayLabel: str(h.dayLabel),
    timeRange: str(h.timeRange),
  }));

  const nearbyRaw = asRecordArray(payload.nearbyLocations);
  const nearbyLocations = nearbyRaw.map((n) => ({
    tag: str(n.tag),
    city: str(n.city),
    state: str(n.state),
    addr: str(n.address),
    href: str(n.href),
  }));

  return {
    hospitalName: str(payload.hospitalName),
    slug: str(payload.slug),
    seoTitle: str(payload.seoTitle),
    heroEyebrow: str(payload.heroEyebrow),
    heroTitlePrefix: str(payload.heroTitlePrefix),
    heroTitleEmphasis: str(payload.heroTitleEmphasis),
    heroLede: str(payload.heroLede),
    heroImageUrl,
    metaChips,
    addressLine1: str(payload.addressLine1),
    addressLine2: str(payload.addressLine2),
    city: str(payload.city),
    state: str(payload.state),
    zip: str(payload.zip),
    phone: str(payload.phone),
    heroPrimaryCtaLabel: str(payload.heroPrimaryCtaLabel),
    heroPrimaryCtaHref: str(payload.heroPrimaryCtaHref),
    heroSecondaryCtaLabel: str(payload.heroSecondaryCtaLabel),
    heroSecondaryCtaHref: str(payload.heroSecondaryCtaHref),
    quickFacts,
    overviewEyebrow: str(payload.overviewEyebrow),
    overviewHeadingPrefix: str(payload.overviewHeadingPrefix),
    overviewHeadingEmphasis: str(payload.overviewHeadingEmphasis),
    overviewParagraph1: str(payload.overviewParagraph1),
    overviewParagraph2: str(payload.overviewParagraph2),
    pullQuote: str(payload.pullQuote),
    pullQuoteAttribution: str(payload.pullQuoteAttribution),
    sidebarRows,
    sidebarPrimaryCtaLabel: str(payload.sidebarPrimaryCtaLabel),
    sidebarPrimaryCtaHref: str(payload.sidebarPrimaryCtaHref),
    sidebarSecondaryCtaLabel: str(payload.sidebarSecondaryCtaLabel),
    sidebarSecondaryCtaHref: str(payload.sidebarSecondaryCtaHref),
    servicesEyebrow: str(payload.servicesEyebrow),
    servicesHeadingPrefix: str(payload.servicesHeadingPrefix),
    servicesHeadingEmphasis: str(payload.servicesHeadingEmphasis),
    locationServices,
    teamEyebrow: str(payload.teamEyebrow),
    teamHeadingPrefix: str(payload.teamHeadingPrefix),
    teamHeadingEmphasis: str(payload.teamHeadingEmphasis),
    teamMembers,
    admissionsEyebrow: str(payload.admissionsEyebrow),
    admissionsHeadingPrefix: str(payload.admissionsHeadingPrefix),
    admissionsHeadingEmphasis: str(payload.admissionsHeadingEmphasis),
    admissionsSubtitle: str(payload.admissionsSubtitle),
    admissionSteps,
    visitMapEmbedUrl: str(payload.visitMapEmbedUrl),
    visitParkingNote: str(payload.visitParkingNote),
    visitHours,
    nearbyEyebrow: str(payload.nearbyEyebrow),
    nearbyHeadingPrefix: str(payload.nearbyHeadingPrefix),
    nearbyHeadingEmphasis: str(payload.nearbyHeadingEmphasis),
    nearbyLocations,
  };
}
