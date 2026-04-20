import qs from "qs";

import type { LocationCard } from "@/content/home-page-view-model";

function getStrapiUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337").replace(/\/$/, "");
}

function str(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
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

function unwrapListResponse(json: unknown): Record<string, unknown>[] {
  if (!json || typeof json !== "object") return [];
  const root = json as { data?: unknown };
  if (!Array.isArray(root.data)) return [];
  return root.data.map(unwrapRecord).filter((x): x is Record<string, unknown> => x !== null);
}

function formatStreet(payload: Record<string, unknown>): string {
  const line1 = str(payload.addressLine1);
  const line2 = str(payload.addressLine2);
  return [line1, line2].filter(Boolean).join(", ");
}

function firstMetaChipLabel(payload: Record<string, unknown>): string {
  const chips = asRecordArray(payload.metaChips);
  if (chips.length > 0) return str(chips[0].label) || "Hospital";
  return "Hospital";
}

function mapPayloadToCard(payload: Record<string, unknown>): LocationCard | null {
  const slug = str(payload.slug);
  const city = str(payload.city);
  const state = str(payload.state);
  if (!slug || !city || !state) return null;

  return {
    city,
    state,
    addr: formatStreet(payload),
    tag: firstMetaChipLabel(payload),
    href: `/locations/${slug}`,
  };
}

const listQuery = qs.stringify(
  {
    populate: {
      metaChips: true,
    },
    sort: ["city:asc"],
    pagination: {
      pageSize: 100,
    },
  },
  { encodeValuesOnly: true },
);

/**
 * Published hospitals as homepage location cards (city / state / street / tag / link).
 * Returns [] if the API fails or there are no entries.
 */
export async function getPublishedHospitalsLocationCards(): Promise<LocationCard[]> {
  const base = getStrapiUrl();
  const url = `${base}/api/hospitals?${listQuery}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[getPublishedHospitalsLocationCards] Strapi ${res.status}`);
      return [];
    }

    const json: unknown = await res.json();
    const rows = unwrapListResponse(json);
    const cards = rows.map(mapPayloadToCard).filter((c): c is LocationCard => c !== null);
    return cards;
  } catch (e) {
    console.warn("[getPublishedHospitalsLocationCards] fetch failed", e);
    return [];
  }
}
