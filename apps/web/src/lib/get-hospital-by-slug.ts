import qs from "qs";

import type { HospitalLocationViewModel } from "@/content/hospital-location-view-model";
import { mapStrapiHospitalPayload } from "@/lib/map-strapi-hospital";

function getStrapiUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337").replace(/\/$/, "");
}

function unwrapListFirst(json: unknown): Record<string, unknown> | null {
  if (!json || typeof json !== "object") return null;
  const root = json as { data?: unknown };
  if (!Array.isArray(root.data) || root.data.length === 0) return null;
  const first = root.data[0];
  if (typeof first !== "object" || first === null) return null;
  const obj = first as Record<string, unknown>;
  if (obj.attributes && typeof obj.attributes === "object") {
    return obj.attributes as Record<string, unknown>;
  }
  return obj;
}

function buildQuery(slug: string): string {
  return qs.stringify(
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: {
        heroImage: true,
        metaChips: true,
        quickFacts: true,
        sidebarRows: true,
        locationServices: true,
        teamMembers: { populate: ["photo"] },
        admissionSteps: true,
        visitHours: true,
        nearbyLocations: true,
      },
    },
    { encodeValuesOnly: true },
  );
}

export async function getHospitalBySlug(slug: string): Promise<HospitalLocationViewModel | null> {
  const base = getStrapiUrl();
  const url = `${base}/api/hospitals?${buildQuery(slug)}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[getHospitalBySlug] Strapi ${res.status}`);
      return null;
    }

    const json: unknown = await res.json();
    const payload = unwrapListFirst(json);
    if (!payload) {
      return null;
    }

    return mapStrapiHospitalPayload(payload, base);
  } catch (e) {
    console.warn("[getHospitalBySlug] fetch failed", e);
    return null;
  }
}
