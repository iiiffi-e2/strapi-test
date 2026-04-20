import qs from "qs";

import { DEFAULT_HOME_PAGE } from "@/content/default-home-page";
import type { HomePageViewModel } from "@/content/home-page-view-model";
import { mapStrapiPayloadToViewModel } from "@/lib/map-strapi-home-page";

function getStrapiUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337").replace(/\/$/, "");
}

function unwrapData(json: unknown): Record<string, unknown> | null {
  if (!json || typeof json !== "object") return null;
  const root = json as { data?: unknown };
  if (root.data === null || root.data === undefined) return null;
  const d = root.data;
  if (typeof d !== "object" || d === null) return null;
  const obj = d as Record<string, unknown>;
  if (obj.attributes && typeof obj.attributes === "object") {
    return obj.attributes as Record<string, unknown>;
  }
  return obj;
}

const populateQuery = qs.stringify(
  {
    populate: {
      hero: { populate: ["image"] },
      servicePrograms: { populate: ["features", "image"] },
      missionImage: true,
      missionValues: true,
      statCells: true,
      locationCards: true,
      navLinks: true,
      footerColumns: { populate: ["links"] },
      footerLegalLinks: true,
    },
  },
  { encodeValuesOnly: true },
);

export async function getHomePage(): Promise<HomePageViewModel> {
  const base = getStrapiUrl();
  const url = `${base}/api/home-page?${populateQuery}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[getHomePage] Strapi ${res.status} — using defaults`);
      return DEFAULT_HOME_PAGE;
    }

    const json: unknown = await res.json();
    const payload = unwrapData(json);
    if (!payload) {
      return DEFAULT_HOME_PAGE;
    }

    return mapStrapiPayloadToViewModel(payload, base);
  } catch (e) {
    console.warn("[getHomePage] fetch failed — using defaults", e);
    return DEFAULT_HOME_PAGE;
  }
}
