import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { VibraHospitalLocation } from "@/components/vibra/VibraHospitalLocation";
import { getHomePage } from "@/lib/get-home-page";
import { getHospitalBySlug } from "@/lib/get-hospital-by-slug";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = await getHospitalBySlug(slug);
  if (!loc) {
    return { title: "Location not found" };
  }
  const title = loc.seoTitle || `${loc.hospitalName} · Vibra Healthcare`;
  return {
    title,
    description: loc.heroLede || undefined,
  };
}

export default async function HospitalLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const [home, loc] = await Promise.all([getHomePage(), getHospitalBySlug(slug)]);
  if (!loc) {
    notFound();
  }
  return <VibraHospitalLocation home={home} loc={loc} />;
}
