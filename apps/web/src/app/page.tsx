import { VibraHome } from "@/components/vibra/VibraHome";
import { getHomePage } from "@/lib/get-home-page";
import { getPublishedHospitalsLocationCards } from "@/lib/get-published-hospitals-location-cards";

export const revalidate = 60;

export default async function Home() {
  const [content, hospitalCards] = await Promise.all([getHomePage(), getPublishedHospitalsLocationCards()]);

  const merged = {
    ...content,
    locationCards: hospitalCards.length > 0 ? hospitalCards : content.locationCards,
  };

  return <VibraHome content={merged} />;
}
