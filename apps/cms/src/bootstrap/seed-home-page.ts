import type { Core } from '@strapi/strapi';

const SEED = {
  siteName: 'Vibra Healthcare',
  hero: {
    eyebrow: 'Specialty hospital network',
    titlePrefix: 'Recovery,',
    titleEmphasis: 'with heart',
    lede:
      'Compassionate, physician-led care for patients who need more time to heal—across inpatient rehabilitation, long-term acute care, and outpatient therapy.',
    primaryCtaLabel: 'Find a location',
    primaryCtaHref: '#locations',
    secondaryCtaLabel: 'Explore services',
    secondaryCtaHref: '#services',
  },
  servicesEyebrow: 'Clinical programs',
  servicesTitlePrefix: 'Care built around',
  servicesTitleEmphasis: 'your',
  servicesSubtitle:
    'Every patient arrives with a different story. Our teams design interdisciplinary plans that combine evidence-based therapy, medical management, and the encouragement you need to reach the next milestone—whether that is home, assisted living, or another level of care.',
  servicePrograms: [
    {
      tabLabel: 'Inpatient rehab',
      title: 'Rehabilitation that meets you where you are',
      lede:
        'Physician-led therapy teams help patients regain strength, mobility, and independence after injury, surgery, or serious illness—with clear goals and compassionate support every step of the way.',
      features: [
        {
          title: 'Intensive daily therapy',
          description:
            'Physical, occupational, and speech therapy tailored to your recovery plan.',
        },
        {
          title: 'Interdisciplinary rounding',
          description:
            'Nurses, therapists, and physicians collaborate on progress and discharge planning.',
        },
        {
          title: 'Family & caregiver support',
          description:
            'Education and resources so your circle can prepare for a safe transition home.',
        },
      ],
      imageBadge: 'Program',
    },
    {
      tabLabel: 'Long-term acute care',
      title: 'Complex medical care with constant attention',
      lede:
        'For patients who need extended monitoring and specialized treatment, our LTACH hospitals provide 24-hour physician oversight in a setting designed for longer recoveries.',
      features: [
        {
          title: 'Ventilator & pulmonary care',
          description:
            'Respiratory therapists work alongside physicians to wean and strengthen breathing.',
        },
        {
          title: 'Wound & infection management',
          description:
            'Advanced protocols to stabilize complex conditions before the next level of care.',
        },
        {
          title: 'Seamless care transitions',
          description:
            'Coordination with referring hospitals, specialists, and post-acute partners.',
        },
      ],
      imageBadge: 'Program',
    },
    {
      tabLabel: 'Outpatient therapy',
      title: 'Staying strong after you leave',
      lede:
        'Outpatient programs bridge the gap between hospital discharge and daily life—helping you rebuild endurance, balance, and confidence close to home.',
      features: [
        {
          title: 'Personalized sessions',
          description:
            'Therapists adjust frequency and focus based on your goals and insurance plan.',
        },
        {
          title: 'Specialty programs',
          description:
            'Options for neurological recovery, orthopedic rehab, and chronic pain support.',
        },
        {
          title: 'Convenient locations',
          description: 'Find a site near you with flexible scheduling options.',
        },
      ],
      imageBadge: 'Program',
    },
    {
      tabLabel: 'Behavioral health',
      title: 'Healing mind and body together',
      lede:
        'Integrated behavioral health services support patients coping with trauma, anxiety, or adjustment after a major medical event—because emotional recovery matters too.',
      features: [
        {
          title: 'Licensed clinicians',
          description:
            'Individual and group sessions aligned with your medical treatment plan.',
        },
        {
          title: 'Whole-person approach',
          description: 'We coordinate with your care team so nothing falls through the cracks.',
        },
        {
          title: 'Discharge planning',
          description:
            'Connections to community resources and follow-up care when you go home.',
        },
      ],
      imageBadge: 'Program',
    },
  ],
  serviceProgramsCtaLabel: 'Find a program near you',
  serviceProgramsCtaHref: '#locations',
  missionEyebrow: 'Our mission',
  missionHeadingPrefix: 'We believe recovery is',
  missionHeadingEmphasis: 'human',
  missionParagraph1:
    'Vibra Healthcare hospitals exist to bridge the gap between acute hospital care and the rest of life—treating complex medical needs with respect, transparency, and relentless attention to what matters most for each patient and family.',
  missionParagraph2:
    'From the first evaluation to discharge planning, you will find teams who listen, explain, and celebrate progress in ways big and small.',
  missionImageBadge: 'Mission',
  missionImageCaption: 'Care teams at work',
  missionValues: [
    {
      numberLabel: '1',
      title: 'Patient-first decisions',
      description: 'Clinical judgment leads; paperwork follows.',
    },
    {
      numberLabel: '2',
      title: 'Collaboration, not silos',
      description: 'Therapists, nurses, and physicians stay aligned on your goals.',
    },
    {
      numberLabel: '3',
      title: 'Dignity in every interaction',
      description: 'We honor your story, your pace, and your support system.',
    },
  ],
  statsEyebrow: 'By the numbers',
  statsTitlePrefix: 'A national network,',
  statsTitleEmphasis: 'local',
  statsSubtitle:
    'Trusted by hospitals, physicians, and families who need a partner for longer recoveries and specialized rehabilitation—without losing the personal touch.',
  statCells: [
    {
      statMain: '50',
      statEmphasis: '+',
      statLabel: 'Hospitals and outpatient locations across the United States',
    },
    {
      statMain: '1',
      statEmphasis: 'k+',
      statLabel: 'Dedicated caregivers focused on rehabilitation and long-term acute care',
    },
    {
      statMain: '24/7',
      statLabel: 'Physician and nursing coverage for patients who need continuous monitoring',
    },
    {
      statMain: '',
      statEmphasis: '∞',
      statLabel: 'Stories of patients reclaiming independence—one milestone at a time',
    },
  ],
  locationsEyebrow: 'Locations',
  locationsTitlePrefix: 'Find care',
  locationsTitleEmphasis: 'close to home',
  zipPlaceholder: 'Enter ZIP code',
  locationCards: [
    {
      city: 'Denver',
      state: 'Colorado',
      address: '1200 Recovery Blvd, Suite 100',
      tag: 'Inpatient rehab',
    },
    {
      city: 'Phoenix',
      state: 'Arizona',
      address: '88 Desert Willow Way',
      tag: 'LTACH',
    },
    {
      city: 'Tampa',
      state: 'Florida',
      address: '450 Bay Care Drive',
      tag: 'Outpatient',
    },
    {
      city: 'Dallas',
      state: 'Texas',
      address: '2100 Medical District Pkwy',
      tag: 'Inpatient rehab',
    },
    {
      city: 'Portland',
      state: 'Oregon',
      address: '333 Evergreen Terrace',
      tag: 'Inpatient rehab',
    },
    {
      city: 'Nashville',
      state: 'Tennessee',
      address: '901 Music Row Clinic',
      tag: 'Outpatient',
    },
  ],
  newsletterHeadingPrefix: 'Stay in the loop—',
  newsletterHeadingEmphasis: 'thoughtfully',
  newsletterBody:
    'Occasional updates on new locations, patient stories, and clinical programs. No clutter—just a short note when we have something meaningful to share.',
  newsletterEmailPlaceholder: 'you@example.com',
  newsletterButtonLabel: 'Subscribe',
  newsletterPrivacyNote: 'We respect your privacy. Unsubscribe anytime.',
  newsletterSuccessMessage:
    'You are on the list. Thank you for trusting us with your inbox.',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Our mission', href: '#mission' },
    { label: 'Locations', href: '#locations' },
    { label: 'Stay informed', href: '#newsletter' },
  ],
  navSecondaryCtaLabel: 'Find care',
  navSecondaryCtaHref: '#locations',
  navPrimaryCtaLabel: 'Refer a patient',
  navPrimaryCtaHref: '#contact',
  footerBrandTitle: 'Vibra',
  footerBrandTitleEmphasis: 'Healthcare',
  footerTagline: 'Specialty hospitals and therapy services focused on recovery—with heart.',
  footerColumns: [
    {
      title: 'Services',
      links: [
        { label: 'Inpatient rehabilitation', href: '#services' },
        { label: 'Long-term acute care', href: '#services' },
        { label: 'Outpatient therapy', href: '#services' },
        { label: 'Behavioral health', href: '#services' },
      ],
    },
    {
      title: 'Patients & families',
      links: [
        { label: 'Find a location', href: '#locations' },
        { label: 'Patient rights', href: '#contact' },
        { label: 'Billing & insurance', href: '#contact' },
        { label: 'Email updates', href: '#newsletter' },
      ],
    },
    {
      title: 'Professionals',
      links: [
        { label: 'Refer a patient', href: '#contact' },
        { label: 'Careers', href: '#contact' },
        { label: 'Medical staff', href: '#contact' },
        { label: 'Compliance', href: '#contact' },
      ],
    },
  ],
  footerLegalLinks: [
    { label: 'Privacy', href: '#contact' },
    { label: 'Terms', href: '#contact' },
    { label: 'Non-discrimination', href: '#contact' },
  ],
  footerCopyright: 'Vibra Healthcare. All rights reserved.',
};

export async function seedHomePage(strapi: Core.Strapi) {
  try {
    const existing = await strapi.documents('api::home-page.home-page').findFirst();
    if (existing) {
      strapi.log.info('[seed] Home page already exists — skipping seed.');
      return;
    }
  } catch (err) {
    strapi.log.warn('[seed] Could not query home-page (will try create anyway):', err);
  }

  try {
    await strapi.documents('api::home-page.home-page').create({
      data: {
        ...SEED,
        publishedAt: new Date(),
      },
      status: 'published',
    });
    strapi.log.info('[seed] Home page seeded and published.');
  } catch (err) {
    strapi.log.error('[seed] Could not seed home page:', err);
  }
}

export async function grantPublicHomePageRead(strapi: Core.Strapi) {
  try {
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });
    if (!publicRole) return;

    const action = 'api::home-page.home-page.find';

    const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
      where: {
        action,
        role: publicRole.id,
      },
    });
    if (existing) return;

    await strapi.db.query('plugin::users-permissions.permission').create({
      data: {
        action,
        role: publicRole.id,
      },
    });
    strapi.log.info('[seed] Public role granted api::home-page.home-page.find');
  } catch (err) {
    strapi.log.warn('[seed] Could not auto-grant public home-page permission — enable in Admin → Settings → Users & Permissions → Public.', err);
  }
}
