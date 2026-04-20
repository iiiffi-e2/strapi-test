import type { Core } from '@strapi/strapi';

/** Generic Google Maps embed (US) — replace per location in CMS. */
const DUMMY_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133389887!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus';

type HospitalSeed = {
  hospitalName: string;
  slug: string;
  seoTitle: string;
  heroEyebrow: string;
  heroTitlePrefix: string;
  heroTitleEmphasis: string;
  heroLede: string;
  metaChips: { label: string; variant: 'accent' | 'ink' }[];
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
  quickFacts: { statMain?: string; statEmphasis?: string; statLabel: string }[];
  overviewEyebrow: string;
  overviewHeadingPrefix: string;
  overviewHeadingEmphasis: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  pullQuote: string;
  pullQuoteAttribution: string;
  sidebarRows: { label: string; value: string }[];
  sidebarPrimaryCtaLabel: string;
  sidebarPrimaryCtaHref: string;
  sidebarSecondaryCtaLabel: string;
  sidebarSecondaryCtaHref: string;
  servicesEyebrow: string;
  servicesHeadingPrefix: string;
  servicesHeadingEmphasis: string;
  locationServices: { title: string; description: string }[];
  teamEyebrow: string;
  teamHeadingPrefix: string;
  teamHeadingEmphasis: string;
  teamMembers: { name: string; role: string; bio: string }[];
  admissionsEyebrow: string;
  admissionsHeadingPrefix: string;
  admissionsHeadingEmphasis: string;
  admissionsSubtitle: string;
  admissionSteps: { title: string; body: string }[];
  visitMapEmbedUrl: string;
  visitParkingNote: string;
  visitHours: { dayLabel: string; timeRange: string }[];
  nearbyEyebrow: string;
  nearbyHeadingPrefix: string;
  nearbyHeadingEmphasis: string;
  nearbyLocations: { tag: string; city: string; state: string; address: string; href: string }[];
};

const HOSPITALS: HospitalSeed[] = [
  {
    hospitalName: 'Vibra Hospital of Denver',
    slug: 'denver-rehabilitation',
    seoTitle: 'Vibra Hospital of Denver — Rehabilitation · Vibra Healthcare',
    heroEyebrow: 'Specialty hospital',
    heroTitlePrefix: 'Vibra Hospital of',
    heroTitleEmphasis: 'Denver',
    heroLede:
      'Inpatient rehabilitation and long-term acute care with interdisciplinary teams focused on your goals, your family, and a safe transition home.',
    metaChips: [
      { label: 'Inpatient rehab', variant: 'accent' },
      { label: 'LTACH', variant: 'ink' },
    ],
    addressLine1: '1200 Recovery Blvd, Suite 100',
    addressLine2: '',
    city: 'Denver',
    state: 'Colorado',
    zip: '80202',
    phone: '(303) 555-0100',
    heroPrimaryCtaLabel: 'Contact admissions',
    heroPrimaryCtaHref: 'tel:+13035550100',
    heroSecondaryCtaLabel: 'Get directions',
    heroSecondaryCtaHref: '#visit',
    quickFacts: [
      { statMain: '50', statEmphasis: '+', statLabel: 'Beds dedicated to acute rehab' },
      { statMain: '24', statEmphasis: '/7', statLabel: 'Physician coverage' },
      { statMain: '3', statEmphasis: ':1', statLabel: 'Therapy staffing ratio (peak)' },
      { statMain: '15', statEmphasis: '+', statLabel: 'Years serving the Front Range' },
    ],
    overviewEyebrow: 'About this location',
    overviewHeadingPrefix: 'Care that',
    overviewHeadingEmphasis: 'fits',
    overviewParagraph1:
      'Our Denver campus combines evidence-based therapy with clear communication—so you always know the plan, the milestones, and what comes next.',
    overviewParagraph2:
      'Whether you are recovering from surgery, injury, or a complex medical stay, we coordinate nursing, therapy, and physician support around your priorities.',
    pullQuote:
      'Every recovery is different. Our job is to listen, adjust the plan, and celebrate progress—whether it is a first step or a trip home.',
    pullQuoteAttribution: '— Medical director, placeholder',
    sidebarRows: [
      { label: 'Referrals', value: 'Accepted 7 days / week' },
      { label: 'Visiting', value: 'See hours below' },
      { label: 'Insurance', value: 'Most major plans (verify)' },
    ],
    sidebarPrimaryCtaLabel: 'Call admissions',
    sidebarPrimaryCtaHref: 'tel:+13035550100',
    sidebarSecondaryCtaLabel: 'Download brochure',
    sidebarSecondaryCtaHref: '#',
    servicesEyebrow: 'Programs',
    servicesHeadingPrefix: 'Services at',
    servicesHeadingEmphasis: 'this hospital',
    locationServices: [
      {
        title: 'Inpatient rehabilitation',
        description: 'Intensive PT, OT, and speech with daily physician-led rounds.',
      },
      {
        title: 'Long-term acute care',
        description: 'Extended monitoring for ventilator weaning, wound care, and complex illness.',
      },
      {
        title: 'Care coordination',
        description: 'Discharge planning with home health, equipment, and follow-up appointments.',
      },
    ],
    teamEyebrow: 'Leadership',
    teamHeadingPrefix: 'Your',
    teamHeadingEmphasis: 'care team',
    teamMembers: [
      {
        name: 'Dr. Alex Morgan',
        role: 'Medical director',
        bio: 'Board-certified in physical medicine with a focus on neuro recovery.',
      },
      {
        name: 'Jordan Lee, RN',
        role: 'Chief nursing officer',
        bio: 'Oversees nursing standards and patient experience across units.',
      },
      {
        name: 'Sam Rivera, PT',
        role: 'Director of therapy',
        bio: 'Leads PT/OT/ST programs and outcome tracking.',
      },
      {
        name: 'Casey Nguyen',
        role: 'Care coordinator',
        bio: 'Helps families navigate insurance, equipment, and discharge planning.',
      },
    ],
    admissionsEyebrow: 'Admissions',
    admissionsHeadingPrefix: 'How to',
    admissionsHeadingEmphasis: 'get started',
    admissionsSubtitle:
      'A simplified overview—your referring physician or case manager will coordinate the details.',
    admissionSteps: [
      {
        title: 'Referral & clinical review',
        body: 'Your hospital or physician sends records. Our team reviews medical necessity and bed availability.',
      },
      {
        title: 'Insurance verification',
        body: 'We confirm benefits and communicate any estimated out-of-pocket costs before admission.',
      },
      {
        title: 'Arrival & care plan',
        body: 'Within 24 hours of admission, you meet your interdisciplinary team and set goals.',
      },
    ],
    visitMapEmbedUrl: DUMMY_MAP_EMBED,
    visitParkingNote:
      'Visitor parking is available in the west lot. Use the main entrance; elevators to patient floors are straight ahead.',
    visitHours: [
      { dayLabel: 'Monday – Friday', timeRange: '8:00 a.m. – 8:00 p.m.' },
      { dayLabel: 'Saturday – Sunday', timeRange: '10:00 a.m. – 6:00 p.m.' },
    ],
    nearbyEyebrow: 'Nearby',
    nearbyHeadingPrefix: 'Other',
    nearbyHeadingEmphasis: 'locations',
    nearbyLocations: [
      {
        tag: 'LTACH',
        city: 'Phoenix',
        state: 'Arizona',
        address: '88 Desert Willow Way',
        href: '/locations/phoenix-specialty',
      },
      {
        tag: 'Inpatient rehab',
        city: 'Dallas',
        state: 'Texas',
        address: '2100 Medical District Pkwy',
        href: '/locations/dallas-medical',
      },
    ],
  },
  {
    hospitalName: 'Vibra Hospital of Phoenix',
    slug: 'phoenix-specialty',
    seoTitle: 'Vibra Hospital of Phoenix — LTACH · Vibra Healthcare',
    heroEyebrow: 'Specialty hospital',
    heroTitlePrefix: 'Vibra Hospital of',
    heroTitleEmphasis: 'Phoenix',
    heroLede:
      'Long-term acute care and rehabilitation services in the Valley—designed for patients who need more time to heal with 24/7 oversight.',
    metaChips: [
      { label: 'LTACH', variant: 'accent' },
      { label: 'Ventilator care', variant: 'ink' },
    ],
    addressLine1: '88 Desert Willow Way',
    addressLine2: '',
    city: 'Phoenix',
    state: 'Arizona',
    zip: '85004',
    phone: '(602) 555-0200',
    heroPrimaryCtaLabel: 'Contact admissions',
    heroPrimaryCtaHref: 'tel:+16025550200',
    heroSecondaryCtaLabel: 'Get directions',
    heroSecondaryCtaHref: '#visit',
    quickFacts: [
      { statMain: '42', statLabel: 'Private patient rooms' },
      { statMain: '24', statEmphasis: '/7', statLabel: 'Respiratory therapy coverage' },
      { statMain: '1', statEmphasis: 'k+', statLabel: 'Annual admissions (demo)' },
      { statMain: '98', statEmphasis: '%', statLabel: 'Family satisfaction (placeholder)' },
    ],
    overviewEyebrow: 'About this location',
    overviewHeadingPrefix: 'Desert',
    overviewHeadingEmphasis: 'recovery',
    overviewParagraph1:
      'Phoenix offers a warm, light-filled environment with dedicated pulmonary and wound programs—supporting patients who need longer stays after hospitalization.',
    overviewParagraph2:
      'Our case managers work closely with referring hospitals and families to align expectations and discharge plans.',
    pullQuote: 'We measure progress in breaths, steps, and smiles—not just charts.',
    pullQuoteAttribution: '— Director of respiratory care, placeholder',
    sidebarRows: [
      { label: 'ICU step-down', value: 'Yes' },
      { label: 'Interpreter services', value: 'On request' },
    ],
    sidebarPrimaryCtaLabel: 'Call admissions',
    sidebarPrimaryCtaHref: 'tel:+16025550200',
    sidebarSecondaryCtaLabel: 'Patient portal',
    sidebarSecondaryCtaHref: '#',
    servicesEyebrow: 'Programs',
    servicesHeadingPrefix: 'Services at',
    servicesHeadingEmphasis: 'this hospital',
    locationServices: [
      {
        title: 'Pulmonary & ventilator',
        description: 'Weaning protocols and respiratory therapy seven days a week.',
      },
      {
        title: 'Wound care',
        description: 'Multidisciplinary wound rounds and specialty dressings.',
      },
      {
        title: 'Rehabilitation',
        description: 'PT/OT when medically ready to transition toward recovery goals.',
      },
    ],
    teamEyebrow: 'Leadership',
    teamHeadingPrefix: 'Your',
    teamHeadingEmphasis: 'care team',
    teamMembers: [
      {
        name: 'Dr. Priya Shah',
        role: 'Medical director',
        bio: 'Pulmonary and critical care background; leads ICU-to-LTACH transitions.',
      },
      {
        name: 'Chris Ortiz, RN',
        role: 'Nurse manager',
        bio: 'Focus on patient safety and family communication.',
      },
      {
        name: 'Taylor Kim, RRT',
        role: 'Respiratory director',
        bio: 'Ventilator management and education for families.',
      },
    ],
    admissionsEyebrow: 'Admissions',
    admissionsHeadingPrefix: 'How to',
    admissionsHeadingEmphasis: 'get started',
    admissionsSubtitle: 'Referrals typically come from acute care hospitals; we respond within one business day.',
    admissionSteps: [
      {
        title: 'Clinical packet',
        body: 'Send recent notes, imaging summaries, and treatment goals.',
      },
      {
        title: 'Screening call',
        body: 'Our physician reviews the case and confirms appropriateness for LTACH.',
      },
      {
        title: 'Bed assignment',
        body: 'We coordinate transport and arrival time with your facility.',
      },
    ],
    visitMapEmbedUrl: DUMMY_MAP_EMBED,
    visitParkingNote: 'Surface lot A is closest to visitors; follow signage for main lobby.',
    visitHours: [
      { dayLabel: 'Daily', timeRange: '9:00 a.m. – 7:00 p.m.' },
    ],
    nearbyEyebrow: 'Nearby',
    nearbyHeadingPrefix: 'Other',
    nearbyHeadingEmphasis: 'locations',
    nearbyLocations: [
      {
        tag: 'Inpatient rehab',
        city: 'Denver',
        state: 'Colorado',
        address: '1200 Recovery Blvd, Suite 100',
        href: '/locations/denver-rehabilitation',
      },
      {
        tag: 'LTACH',
        city: 'Tampa',
        state: 'Florida',
        address: '450 Bay Care Drive',
        href: '/locations/tampa-ltach',
      },
    ],
  },
  {
    hospitalName: 'Vibra Hospital of Tampa',
    slug: 'tampa-ltach',
    seoTitle: 'Vibra Hospital of Tampa — Long-term acute care · Vibra Healthcare',
    heroEyebrow: 'Specialty hospital',
    heroTitlePrefix: 'Vibra Hospital of',
    heroTitleEmphasis: 'Tampa',
    heroLede:
      'Comprehensive LTACH services near Tampa Bay with emphasis on infection control, nutrition, and family-centered recovery.',
    metaChips: [
      { label: 'LTACH', variant: 'accent' },
      { label: 'Wound program', variant: 'ink' },
    ],
    addressLine1: '450 Bay Care Drive',
    addressLine2: '',
    city: 'Tampa',
    state: 'Florida',
    zip: '33602',
    phone: '(813) 555-0300',
    heroPrimaryCtaLabel: 'Contact admissions',
    heroPrimaryCtaHref: 'tel:+18135550300',
    heroSecondaryCtaLabel: 'Get directions',
    heroSecondaryCtaHref: '#visit',
    quickFacts: [
      { statMain: '36', statLabel: 'Monitored beds' },
      { statEmphasis: '∞', statLabel: 'Coffee for families (demo)' },
      { statMain: '7', statLabel: 'Day-a-week therapy' },
      { statMain: '20', statEmphasis: 'min', statLabel: 'Avg. response to nurse call (demo)' },
    ],
    overviewEyebrow: 'About this location',
    overviewHeadingPrefix: 'Coastal',
    overviewHeadingEmphasis: 'care',
    overviewParagraph1:
      'Tampa combines clinical depth with hospitality—sunlit rooms, quiet family spaces, and a team that returns calls quickly.',
    overviewParagraph2:
      'We partner with regional health systems and accept medically complex transfers when criteria are met.',
    pullQuote: 'We are here for the long stay—without making it feel endless.',
    pullQuoteAttribution: '— Chief nursing officer, placeholder',
    sidebarRows: [
      { label: 'Pet therapy', value: 'Select days (demo)' },
      { label: 'Chapel', value: 'On campus' },
    ],
    sidebarPrimaryCtaLabel: 'Call admissions',
    sidebarPrimaryCtaHref: 'tel:+18135550300',
    sidebarSecondaryCtaLabel: 'Download brochure',
    sidebarSecondaryCtaHref: '#',
    servicesEyebrow: 'Programs',
    servicesHeadingPrefix: 'Services at',
    servicesHeadingEmphasis: 'this hospital',
    locationServices: [
      {
        title: 'Infectious disease',
        description: 'Antibiotic stewardship and isolation protocols as needed.',
      },
      {
        title: 'Nutrition support',
        description: 'Dietitians and speech therapy for swallowing and feeding plans.',
      },
      {
        title: 'Dialysis coordination',
        description: 'Partnerships with outpatient providers when needed.',
      },
    ],
    teamEyebrow: 'Leadership',
    teamHeadingPrefix: 'Your',
    teamHeadingEmphasis: 'care team',
    teamMembers: [
      {
        name: 'Dr. Maria Santos',
        role: 'Medical director',
        bio: 'Internal medicine and infectious disease focus.',
      },
      {
        name: 'Jamie Brooks',
        role: 'Director of pharmacy',
        bio: 'Medication safety and antimicrobial stewardship.',
      },
    ],
    admissionsEyebrow: 'Admissions',
    admissionsHeadingPrefix: 'How to',
    admissionsHeadingEmphasis: 'get started',
    admissionsSubtitle: 'We accept referrals from Florida and neighboring states when clinically appropriate.',
    admissionSteps: [
      {
        title: 'Referral',
        body: 'Hospital case management submits demographics and clinical summary.',
      },
      {
        title: 'Peer-to-peer',
        body: 'Physicians may discuss complex cases directly.',
      },
      {
        title: 'Admission',
        body: 'We confirm bed and arrival window with transport.',
      },
    ],
    visitMapEmbedUrl: DUMMY_MAP_EMBED,
    visitParkingNote: 'Garage B has dedicated visitor parking; first hour free (demo).',
    visitHours: [
      { dayLabel: 'Monday – Sunday', timeRange: '10:00 a.m. – 8:00 p.m.' },
    ],
    nearbyEyebrow: 'Nearby',
    nearbyHeadingPrefix: 'Other',
    nearbyHeadingEmphasis: 'locations',
    nearbyLocations: [
      {
        tag: 'LTACH',
        city: 'Phoenix',
        state: 'Arizona',
        address: '88 Desert Willow Way',
        href: '/locations/phoenix-specialty',
      },
      {
        tag: 'Inpatient rehab',
        city: 'Nashville',
        state: 'Tennessee',
        address: '901 Music Row Clinic',
        href: '/locations/nashville-music-row',
      },
    ],
  },
  {
    hospitalName: 'Vibra Hospital of Dallas',
    slug: 'dallas-medical',
    seoTitle: 'Vibra Hospital of Dallas — Rehabilitation · Vibra Healthcare',
    heroEyebrow: 'Specialty hospital',
    heroTitlePrefix: 'Vibra Hospital of',
    heroTitleEmphasis: 'Dallas',
    heroLede:
      'Medical District rehabilitation and long-term acute care with strong ties to regional referral centers.',
    metaChips: [
      { label: 'Inpatient rehab', variant: 'accent' },
      { label: 'Stroke program', variant: 'ink' },
    ],
    addressLine1: '2100 Medical District Pkwy',
    addressLine2: '',
    city: 'Dallas',
    state: 'Texas',
    zip: '75201',
    phone: '(214) 555-0400',
    heroPrimaryCtaLabel: 'Contact admissions',
    heroPrimaryCtaHref: 'tel:+12145550400',
    heroSecondaryCtaLabel: 'Get directions',
    heroSecondaryCtaHref: '#visit',
    quickFacts: [
      { statMain: '60', statLabel: 'Inpatient rehab beds' },
      { statMain: '5', statEmphasis: 'days', statLabel: 'Avg. to first family meeting (demo)' },
      { statMain: '12', statLabel: 'Private family consult rooms' },
      { statMain: '24', statEmphasis: '/7', statLabel: 'Security & reception' },
    ],
    overviewEyebrow: 'About this location',
    overviewHeadingPrefix: 'Big city',
    overviewHeadingEmphasis: 'heart',
    overviewParagraph1:
      'Dallas offers a full continuum from medically complex stabilization to intensive therapy—with interpreters and cultural support on request.',
    overviewParagraph2:
      'Our stroke and brain injury pathways include structured family training before discharge.',
    pullQuote: 'Recovery is a team sport—we coach families too.',
    pullQuoteAttribution: '— Stroke program lead, placeholder',
    sidebarRows: [
      { label: 'EMR', value: 'Connected to major DFW systems (demo)' },
      { label: 'Transport', value: 'Ground ambulance partners' },
    ],
    sidebarPrimaryCtaLabel: 'Call admissions',
    sidebarPrimaryCtaHref: 'tel:+12145550400',
    sidebarSecondaryCtaLabel: 'Refer a patient',
    sidebarSecondaryCtaHref: '#',
    servicesEyebrow: 'Programs',
    servicesHeadingPrefix: 'Services at',
    servicesHeadingEmphasis: 'this hospital',
    locationServices: [
      {
        title: 'Stroke rehabilitation',
        description: 'Constraint-induced therapy, robotics trial enrollment (demo), and caregiver training.',
      },
      {
        title: 'Brain injury',
        description: 'Cognitive and behavioral supports with neuropsychology consults.',
      },
      {
        title: 'Amputee rehab',
        description: 'Prosthetic training and pre-gait conditioning.',
      },
    ],
    teamEyebrow: 'Leadership',
    teamHeadingPrefix: 'Your',
    teamHeadingEmphasis: 'care team',
    teamMembers: [
      {
        name: 'Dr. James Wilson',
        role: 'Medical director',
        bio: 'PM&R with subspecialty fellowship in stroke recovery.',
      },
      {
        name: 'Riley Patel, PT',
        role: 'Stroke program lead',
        bio: 'Certified in neuro rehabilitation and gait analysis.',
      },
    ],
    admissionsEyebrow: 'Admissions',
    admissionsHeadingPrefix: 'How to',
    admissionsHeadingEmphasis: 'get started',
    admissionsSubtitle: 'Referrals welcome from Texas and surrounding states.',
    admissionSteps: [
      {
        title: 'Documentation',
        body: 'Send H&P, PT/OT notes, and recent imaging.',
      },
      {
        title: 'Peer review',
        body: 'Medical director reviews appropriateness within 4 hours (demo).',
      },
      {
        title: 'Acceptance',
        body: 'We notify you of bed date and expected length of stay range.',
      },
    ],
    visitMapEmbedUrl: DUMMY_MAP_EMBED,
    visitParkingNote: 'Use Medical District Pkwy entrance; valet available weekdays (demo).',
    visitHours: [
      { dayLabel: 'Monday – Friday', timeRange: '8:00 a.m. – 9:00 p.m.' },
      { dayLabel: 'Saturday – Sunday', timeRange: '11:00 a.m. – 7:00 p.m.' },
    ],
    nearbyEyebrow: 'Nearby',
    nearbyHeadingPrefix: 'Other',
    nearbyHeadingEmphasis: 'locations',
    nearbyLocations: [
      {
        tag: 'Inpatient rehab',
        city: 'Denver',
        state: 'Colorado',
        address: '1200 Recovery Blvd, Suite 100',
        href: '/locations/denver-rehabilitation',
      },
      {
        tag: 'Outpatient',
        city: 'Portland',
        state: 'Oregon',
        address: '333 Evergreen Terrace',
        href: '/locations/portland-evergreen',
      },
    ],
  },
  {
    hospitalName: 'Vibra Hospital of Portland',
    slug: 'portland-evergreen',
    seoTitle: 'Vibra Hospital of Portland — Rehabilitation · Vibra Healthcare',
    heroEyebrow: 'Specialty hospital',
    heroTitlePrefix: 'Vibra Hospital of',
    heroTitleEmphasis: 'Portland',
    heroLede:
      'Pacific Northwest rehabilitation with a focus on sustainability, community reintegration, and outdoor mobility goals.',
    metaChips: [
      { label: 'Inpatient rehab', variant: 'accent' },
      { label: 'Outpatient bridge', variant: 'ink' },
    ],
    addressLine1: '333 Evergreen Terrace',
    addressLine2: '',
    city: 'Portland',
    state: 'Oregon',
    zip: '97201',
    phone: '(503) 555-0500',
    heroPrimaryCtaLabel: 'Contact admissions',
    heroPrimaryCtaHref: 'tel:+15035550500',
    heroSecondaryCtaLabel: 'Get directions',
    heroSecondaryCtaHref: '#visit',
    quickFacts: [
      { statMain: '48', statLabel: 'Private rooms' },
      { statMain: '100', statEmphasis: '%', statLabel: 'Renewable power (demo)' },
      { statMain: '3', statLabel: 'Outdoor therapy gardens' },
      { statMain: '5', statEmphasis: '★', statLabel: 'Patient experience (demo)' },
    ],
    overviewEyebrow: 'About this location',
    overviewHeadingPrefix: 'Evergreen',
    overviewHeadingEmphasis: 'recovery',
    overviewParagraph1:
      'Portland blends rain-or-shine therapy with practical planning for home, transit, and caregiver support.',
    overviewParagraph2:
      'We partner with local outpatient clinics to smooth the handoff after discharge.',
    pullQuote: 'We train for real life—curbs, ramps, and rainy sidewalks included.',
    pullQuoteAttribution: '— Lead physical therapist, placeholder',
    sidebarRows: [
      { label: 'Bike storage', value: 'Visitor racks' },
      { label: 'Transit', value: '2 blocks to MAX (demo)' },
    ],
    sidebarPrimaryCtaLabel: 'Call admissions',
    sidebarPrimaryCtaHref: 'tel:+15035550500',
    sidebarSecondaryCtaLabel: 'Download brochure',
    sidebarSecondaryCtaHref: '#',
    servicesEyebrow: 'Programs',
    servicesHeadingPrefix: 'Services at',
    servicesHeadingEmphasis: 'this hospital',
    locationServices: [
      {
        title: 'Inpatient rehabilitation',
        description: 'High-intensity therapy and daily medical management.',
      },
      {
        title: 'Outpatient bridge',
        description: 'Scheduled follow-ups at the same campus (demo).',
      },
      {
        title: 'Community integration',
        description: 'Outings and home evaluations when appropriate.',
      },
    ],
    teamEyebrow: 'Leadership',
    teamHeadingPrefix: 'Your',
    teamHeadingEmphasis: 'care team',
    teamMembers: [
      {
        name: 'Dr. Erin Walsh',
        role: 'Medical director',
        bio: 'PM&R with interest in geriatric fracture recovery.',
      },
      {
        name: 'Morgan Blake, OT',
        role: 'Occupational therapy lead',
        bio: 'ADL training and home modification assessments.',
      },
    ],
    admissionsEyebrow: 'Admissions',
    admissionsHeadingPrefix: 'How to',
    admissionsHeadingEmphasis: 'get started',
    admissionsSubtitle: 'We accept referrals throughout Oregon and SW Washington.',
    admissionSteps: [
      {
        title: 'Referral',
        body: 'Send demographics and therapy needs.',
      },
      {
        title: 'Tour (optional)',
        body: 'Families may schedule a virtual tour (demo).',
      },
      {
        title: 'Admission',
        body: 'We confirm bed and arrival window.',
      },
    ],
    visitMapEmbedUrl: DUMMY_MAP_EMBED,
    visitParkingNote: 'Street parking and small visitor lot; EV chargers available (demo).',
    visitHours: [
      { dayLabel: 'Monday – Friday', timeRange: '9:00 a.m. – 8:00 p.m.' },
      { dayLabel: 'Saturday – Sunday', timeRange: '12:00 p.m. – 6:00 p.m.' },
    ],
    nearbyEyebrow: 'Nearby',
    nearbyHeadingPrefix: 'Other',
    nearbyHeadingEmphasis: 'locations',
    nearbyLocations: [
      {
        tag: 'Inpatient rehab',
        city: 'Dallas',
        state: 'Texas',
        address: '2100 Medical District Pkwy',
        href: '/locations/dallas-medical',
      },
      {
        tag: 'Outpatient',
        city: 'Nashville',
        state: 'Tennessee',
        address: '901 Music Row Clinic',
        href: '/locations/nashville-music-row',
      },
    ],
  },
  {
    hospitalName: 'Vibra Hospital of Nashville',
    slug: 'nashville-music-row',
    seoTitle: 'Vibra Hospital of Nashville — Outpatient & rehab · Vibra Healthcare',
    heroEyebrow: 'Specialty hospital',
    heroTitlePrefix: 'Vibra Hospital of',
    heroTitleEmphasis: 'Nashville',
    heroLede:
      'Music Row outpatient and short-stay rehabilitation—rhythm and motion therapy with a dose of Southern hospitality.',
    metaChips: [
      { label: 'Outpatient', variant: 'accent' },
      { label: 'Day rehab', variant: 'ink' },
    ],
    addressLine1: '901 Music Row Clinic',
    addressLine2: 'Building C',
    city: 'Nashville',
    state: 'Tennessee',
    zip: '37203',
    phone: '(615) 555-0600',
    heroPrimaryCtaLabel: 'Contact admissions',
    heroPrimaryCtaHref: 'tel:+16155550600',
    heroSecondaryCtaLabel: 'Get directions',
    heroSecondaryCtaHref: '#visit',
    quickFacts: [
      { statMain: '18', statLabel: 'Treatment bays' },
      { statMain: '6', statEmphasis: 'am', statLabel: 'Early appointments (demo)' },
      { statMain: '30', statEmphasis: '+', statLabel: 'Insurances accepted (demo)' },
      { statMain: '4', statEmphasis: '★', statLabel: 'Google rating (demo)' },
    ],
    overviewEyebrow: 'About this location',
    overviewHeadingPrefix: 'Music',
    overviewHeadingEmphasis: 'city',
    overviewParagraph1:
      'Nashville combines creative therapy approaches with strong physician partnerships across Middle Tennessee.',
    overviewParagraph2:
      'Whether you are recovering from surgery or building strength after injury, we design sessions around your schedule.',
    pullQuote: 'We put the “move” in Music Row—one step at a time.',
    pullQuoteAttribution: '— Therapy director, placeholder',
    sidebarRows: [
      { label: 'Parking', value: 'Validated at clinic desk (demo)' },
      { label: 'Hours', value: 'See visit section' },
    ],
    sidebarPrimaryCtaLabel: 'Call admissions',
    sidebarPrimaryCtaHref: 'tel:+16155550600',
    sidebarSecondaryCtaLabel: 'Schedule online',
    sidebarSecondaryCtaHref: '#',
    servicesEyebrow: 'Programs',
    servicesHeadingPrefix: 'Services at',
    servicesHeadingEmphasis: 'this hospital',
    locationServices: [
      {
        title: 'Outpatient therapy',
        description: 'PT, OT, and speech with flexible scheduling.',
      },
      {
        title: 'Day rehabilitation',
        description: 'Structured full-day programs for patients who need intensity without overnight stay.',
      },
      {
        title: 'Work conditioning',
        description: 'Return-to-work and ergonomic assessments (demo).',
      },
    ],
    teamEyebrow: 'Leadership',
    teamHeadingPrefix: 'Your',
    teamHeadingEmphasis: 'care team',
    teamMembers: [
      {
        name: 'Dr. Harper Quinn',
        role: 'Medical director',
        bio: 'Sports medicine crossover with geriatric rehab.',
      },
      {
        name: 'Drew Coleman, PT',
        role: 'Director of therapy',
        bio: 'Orthopedic and post-surgical protocols.',
      },
    ],
    admissionsEyebrow: 'Admissions',
    admissionsHeadingPrefix: 'How to',
    admissionsHeadingEmphasis: 'get started',
    admissionsSubtitle: 'Referrals from physicians and self-referrals for select programs (demo).',
    admissionSteps: [
      {
        title: 'Prescription',
        body: 'Bring PT/OT referral from your physician.',
      },
      {
        title: 'Evaluation',
        body: 'First visit includes assessment and goal setting.',
      },
      {
        title: 'Plan of care',
        body: 'Frequency and duration set with your insurance in mind.',
      },
    ],
    visitMapEmbedUrl: DUMMY_MAP_EMBED,
    visitParkingNote: 'Building C garage; take elevator to level 2 for outpatient check-in.',
    visitHours: [
      { dayLabel: 'Monday – Thursday', timeRange: '6:00 a.m. – 8:00 p.m.' },
      { dayLabel: 'Friday', timeRange: '6:00 a.m. – 5:00 p.m.' },
      { dayLabel: 'Saturday', timeRange: '8:00 a.m. – 12:00 p.m.' },
    ],
    nearbyEyebrow: 'Nearby',
    nearbyHeadingPrefix: 'Other',
    nearbyHeadingEmphasis: 'locations',
    nearbyLocations: [
      {
        tag: 'LTACH',
        city: 'Tampa',
        state: 'Florida',
        address: '450 Bay Care Drive',
        href: '/locations/tampa-ltach',
      },
      {
        tag: 'Inpatient rehab',
        city: 'Portland',
        state: 'Oregon',
        address: '333 Evergreen Terrace',
        href: '/locations/portland-evergreen',
      },
    ],
  },
];

async function hospitalWithSlugExists(strapi: Core.Strapi, slug: string): Promise<boolean> {
  try {
    const doc = await strapi.documents('api::hospital.hospital').findFirst({
      filters: { slug: { $eq: slug } },
    });
    if (doc) return true;
  } catch (err) {
    strapi.log.warn(`[seed] document lookup failed for slug "${slug}" (will try db):`, err);
  }
  try {
    const row = await strapi.db.query('api::hospital.hospital').findOne({
      where: { slug },
    });
    return Boolean(row);
  } catch (err) {
    strapi.log.warn(`[seed] db lookup failed for slug "${slug}":`, err);
    return false;
  }
}

export async function seedHospitals(strapi: Core.Strapi) {
  let created = 0;
  let skipped = 0;

  for (const row of HOSPITALS) {
    const { slug, ...rest } = row;

    const exists = await hospitalWithSlugExists(strapi, slug);
    if (exists) {
      skipped += 1;
      continue;
    }

    const data = { ...rest };
    Object.keys(data).forEach((k) => {
      const v = (data as Record<string, unknown>)[k];
      if (v === '') delete (data as Record<string, unknown>)[k];
    });

    try {
      await strapi.documents('api::hospital.hospital').create({
        data: {
          ...data,
          slug,
          publishedAt: new Date(),
        },
        status: 'published',
      });
      created += 1;
      strapi.log.info(`[seed] Hospital seeded: ${slug}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      strapi.log.error(`[seed] Could not seed hospital ${slug}: ${msg}`, err);
    }
  }

  if (created > 0) {
    strapi.log.info(`[seed] Hospital seed finished: ${created} created, ${skipped} already present.`);
  } else if (skipped > 0) {
    strapi.log.info(`[seed] Hospital seed: all ${skipped} seed slugs already present — nothing to add.`);
  }
}
