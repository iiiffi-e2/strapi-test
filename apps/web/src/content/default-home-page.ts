import type { HomePageViewModel } from "./home-page-view-model";

/** Local / Unsplash fallbacks when Strapi media is not set */
export const FALLBACK_IMAGES = {
  hero: "/vibra-hero.png",
  services: [
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a077451b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  ],
  mission:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
} as const;

export const DEFAULT_HOME_PAGE: HomePageViewModel = {
  siteName: "Vibra Healthcare",
  hero: {
    eyebrow: "Specialty hospital network",
    titlePrefix: "Recovery,",
    titleEmphasis: "with heart",
    lede:
      "Compassionate, physician-led care for patients who need more time to heal—across inpatient rehabilitation, long-term acute care, and outpatient therapy.",
    primaryCtaLabel: "Find a location",
    primaryCtaHref: "#locations",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "#services",
    imageUrl: FALLBACK_IMAGES.hero,
  },
  servicesEyebrow: "Clinical programs",
  servicesTitlePrefix: "Care built around",
  servicesTitleEmphasis: "your",
  servicesSubtitle:
    "Every patient arrives with a different story. Our teams design interdisciplinary plans that combine evidence-based therapy, medical management, and the encouragement you need to reach the next milestone—whether that is home, assisted living, or another level of care.",
  servicePrograms: [
    {
      id: "rehab",
      tab: "Inpatient rehab",
      title: "Rehabilitation that meets you where you are",
      lede:
        "Physician-led therapy teams help patients regain strength, mobility, and independence after injury, surgery, or serious illness—with clear goals and compassionate support every step of the way.",
      feats: [
        { t: "Intensive daily therapy", d: "Physical, occupational, and speech therapy tailored to your recovery plan." },
        { t: "Interdisciplinary rounding", d: "Nurses, therapists, and physicians collaborate on progress and discharge planning." },
        { t: "Family & caregiver support", d: "Education and resources so your circle can prepare for a safe transition home." },
      ],
      imageUrl: FALLBACK_IMAGES.services[0],
      imageBadge: "Program",
      imageCaption: "Inpatient rehab",
    },
    {
      id: "ltac",
      tab: "Long-term acute care",
      title: "Complex medical care with constant attention",
      lede:
        "For patients who need extended monitoring and specialized treatment, our LTACH hospitals provide 24-hour physician oversight in a setting designed for longer recoveries.",
      feats: [
        { t: "Ventilator & pulmonary care", d: "Respiratory therapists work alongside physicians to wean and strengthen breathing." },
        { t: "Wound & infection management", d: "Advanced protocols to stabilize complex conditions before the next level of care." },
        { t: "Seamless care transitions", d: "Coordination with referring hospitals, specialists, and post-acute partners." },
      ],
      imageUrl: FALLBACK_IMAGES.services[1],
      imageBadge: "Program",
      imageCaption: "Long-term acute care",
    },
    {
      id: "outpatient",
      tab: "Outpatient therapy",
      title: "Staying strong after you leave",
      lede:
        "Outpatient programs bridge the gap between hospital discharge and daily life—helping you rebuild endurance, balance, and confidence close to home.",
      feats: [
        { t: "Personalized sessions", d: "Therapists adjust frequency and focus based on your goals and insurance plan." },
        { t: "Specialty programs", d: "Options for neurological recovery, orthopedic rehab, and chronic pain support." },
        { t: "Convenient locations", d: "Find a site near you with flexible scheduling options." },
      ],
      imageUrl: FALLBACK_IMAGES.services[2],
      imageBadge: "Program",
      imageCaption: "Outpatient therapy",
    },
    {
      id: "behavioral",
      tab: "Behavioral health",
      title: "Healing mind and body together",
      lede:
        "Integrated behavioral health services support patients coping with trauma, anxiety, or adjustment after a major medical event—because emotional recovery matters too.",
      feats: [
        { t: "Licensed clinicians", d: "Individual and group sessions aligned with your medical treatment plan." },
        { t: "Whole-person approach", d: "We coordinate with your care team so nothing falls through the cracks." },
        { t: "Discharge planning", d: "Connections to community resources and follow-up care when you go home." },
      ],
      imageUrl: FALLBACK_IMAGES.services[3],
      imageBadge: "Program",
      imageCaption: "Behavioral health",
    },
  ],
  serviceProgramsCtaLabel: "Find a program near you",
  serviceProgramsCtaHref: "#locations",
  missionEyebrow: "Our mission",
  missionHeadingPrefix: "We believe recovery is",
  missionHeadingEmphasis: "human",
  missionParagraph1:
    "Vibra Healthcare hospitals exist to bridge the gap between acute hospital care and the rest of life—treating complex medical needs with respect, transparency, and relentless attention to what matters most for each patient and family.",
  missionParagraph2:
    "From the first evaluation to discharge planning, you will find teams who listen, explain, and celebrate progress in ways big and small.",
  missionImageUrl: FALLBACK_IMAGES.mission,
  missionImageBadge: "Mission",
  missionImageCaption: "Care teams at work",
  missionValues: [
    { num: "1", t: "Patient-first decisions", d: "Clinical judgment leads; paperwork follows." },
    { num: "2", t: "Collaboration, not silos", d: "Therapists, nurses, and physicians stay aligned on your goals." },
    { num: "3", t: "Dignity in every interaction", d: "We honor your story, your pace, and your support system." },
  ],
  statsEyebrow: "By the numbers",
  statsTitlePrefix: "A national network,",
  statsTitleEmphasis: "local",
  statsSubtitle:
    "Trusted by hospitals, physicians, and families who need a partner for longer recoveries and specialized rehabilitation—without losing the personal touch.",
  statCells: [
    { statMain: "50", statEmphasis: "+", statLabel: "Hospitals and outpatient locations across the United States" },
    { statMain: "1", statEmphasis: "k+", statLabel: "Dedicated caregivers focused on rehabilitation and long-term acute care" },
    { statMain: "24/7", statLabel: "Physician and nursing coverage for patients who need continuous monitoring" },
    { statMain: "", statEmphasis: "∞", statLabel: "Stories of patients reclaiming independence—one milestone at a time" },
  ],
  locationsEyebrow: "Locations",
  locationsTitlePrefix: "Find care",
  locationsTitleEmphasis: "close to home",
  zipPlaceholder: "Enter ZIP code",
  locationCards: [
    { city: "Denver", state: "Colorado", addr: "1200 Recovery Blvd, Suite 100", tag: "Inpatient rehab" },
    { city: "Phoenix", state: "Arizona", addr: "88 Desert Willow Way", tag: "LTACH" },
    { city: "Tampa", state: "Florida", addr: "450 Bay Care Drive", tag: "Outpatient" },
    { city: "Dallas", state: "Texas", addr: "2100 Medical District Pkwy", tag: "Inpatient rehab" },
    { city: "Portland", state: "Oregon", addr: "333 Evergreen Terrace", tag: "Inpatient rehab" },
    { city: "Nashville", state: "Tennessee", addr: "901 Music Row Clinic", tag: "Outpatient" },
  ],
  newsletterHeadingPrefix: "Stay in the loop—",
  newsletterHeadingEmphasis: "thoughtfully",
  newsletterBody:
    "Occasional updates on new locations, patient stories, and clinical programs. No clutter—just a short note when we have something meaningful to share.",
  newsletterEmailPlaceholder: "you@example.com",
  newsletterButtonLabel: "Subscribe",
  newsletterPrivacyNote: "We respect your privacy. Unsubscribe anytime.",
  newsletterSuccessMessage: "You are on the list. Thank you for trusting us with your inbox.",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Our mission", href: "#mission" },
    { label: "Locations", href: "#locations" },
    { label: "Stay informed", href: "#newsletter" },
  ],
  navSecondaryCtaLabel: "Find care",
  navSecondaryCtaHref: "#locations",
  navPrimaryCtaLabel: "Refer a patient",
  navPrimaryCtaHref: "#contact",
  footerBrandTitle: "Vibra",
  footerBrandTitleEmphasis: "Healthcare",
  footerTagline: "Specialty hospitals and therapy services focused on recovery—with heart.",
  footerColumns: [
    {
      title: "Services",
      links: [
        { label: "Inpatient rehabilitation", href: "#services" },
        { label: "Long-term acute care", href: "#services" },
        { label: "Outpatient therapy", href: "#services" },
        { label: "Behavioral health", href: "#services" },
      ],
    },
    {
      title: "Patients & families",
      links: [
        { label: "Find a location", href: "#locations" },
        { label: "Patient rights", href: "#contact" },
        { label: "Billing & insurance", href: "#contact" },
        { label: "Email updates", href: "#newsletter" },
      ],
    },
    {
      title: "Professionals",
      links: [
        { label: "Refer a patient", href: "#contact" },
        { label: "Careers", href: "#contact" },
        { label: "Medical staff", href: "#contact" },
        { label: "Compliance", href: "#contact" },
      ],
    },
  ],
  footerLegalLinks: [
    { label: "Privacy", href: "#contact" },
    { label: "Terms", href: "#contact" },
    { label: "Non-discrimination", href: "#contact" },
  ],
  footerCopyright: "Vibra Healthcare. All rights reserved.",
};
