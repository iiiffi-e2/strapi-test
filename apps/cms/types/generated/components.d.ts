import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_homepage_footer_columns';
  info: {
    displayName: 'Footer column';
  };
  attributes: {
    links: Schema.Attribute.Component<'homepage.footer-link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_homepage_footer_links';
  info: {
    displayName: 'Footer link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    lede: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    titleEmphasis: Schema.Attribute.String;
    titlePrefix: Schema.Attribute.String;
  };
}

export interface HomepageLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_location_cards';
  info: {
    displayName: 'Location card';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageMissionValue extends Struct.ComponentSchema {
  collectionName: 'components_homepage_mission_values';
  info: {
    displayName: 'Mission value';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    numberLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageNavLink extends Struct.ComponentSchema {
  collectionName: 'components_homepage_nav_links';
  info: {
    displayName: 'Nav link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_service_features';
  info: {
    description: 'Bullet under a service program';
    displayName: 'Service feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageServiceProgram extends Struct.ComponentSchema {
  collectionName: 'components_homepage_service_programs';
  info: {
    displayName: 'Service program';
  };
  attributes: {
    features: Schema.Attribute.Component<'homepage.service-feature', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageBadge: Schema.Attribute.String;
    imageCaption: Schema.Attribute.String;
    lede: Schema.Attribute.Text & Schema.Attribute.Required;
    tabLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageStatCell extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stat_cells';
  info: {
    displayName: 'Stat cell';
  };
  attributes: {
    statEmphasis: Schema.Attribute.String;
    statLabel: Schema.Attribute.Text & Schema.Attribute.Required;
    statMain: Schema.Attribute.String;
  };
}

export interface HospitalAdmissionStep extends Struct.ComponentSchema {
  collectionName: 'components_hospital_admission_steps';
  info: {
    displayName: 'Admission step';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HospitalHourRow extends Struct.ComponentSchema {
  collectionName: 'components_hospital_hour_rows';
  info: {
    displayName: 'Hour row';
  };
  attributes: {
    dayLabel: Schema.Attribute.String & Schema.Attribute.Required;
    timeRange: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HospitalLocationService extends Struct.ComponentSchema {
  collectionName: 'components_hospital_location_services';
  info: {
    displayName: 'Location service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HospitalMetaChip extends Struct.ComponentSchema {
  collectionName: 'components_hospital_meta_chips';
  info: {
    displayName: 'Meta chip';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['accent', 'ink']> &
      Schema.Attribute.DefaultTo<'accent'>;
  };
}

export interface HospitalNearbyLink extends Struct.ComponentSchema {
  collectionName: 'components_hospital_nearby_links';
  info: {
    displayName: 'Nearby location';
  };
  attributes: {
    address: Schema.Attribute.Text;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String;
  };
}

export interface HospitalQuickFact extends Struct.ComponentSchema {
  collectionName: 'components_hospital_quick_facts';
  info: {
    displayName: 'Quick fact';
  };
  attributes: {
    statEmphasis: Schema.Attribute.String;
    statLabel: Schema.Attribute.String & Schema.Attribute.Required;
    statMain: Schema.Attribute.String;
  };
}

export interface HospitalSidebarRow extends Struct.ComponentSchema {
  collectionName: 'components_hospital_sidebar_rows';
  info: {
    displayName: 'Sidebar row';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HospitalTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_hospital_team_members';
  info: {
    displayName: 'Team member';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.footer-column': HomepageFooterColumn;
      'homepage.footer-link': HomepageFooterLink;
      'homepage.hero': HomepageHero;
      'homepage.location-card': HomepageLocationCard;
      'homepage.mission-value': HomepageMissionValue;
      'homepage.nav-link': HomepageNavLink;
      'homepage.service-feature': HomepageServiceFeature;
      'homepage.service-program': HomepageServiceProgram;
      'homepage.stat-cell': HomepageStatCell;
      'hospital.admission-step': HospitalAdmissionStep;
      'hospital.hour-row': HospitalHourRow;
      'hospital.location-service': HospitalLocationService;
      'hospital.meta-chip': HospitalMetaChip;
      'hospital.nearby-link': HospitalNearbyLink;
      'hospital.quick-fact': HospitalQuickFact;
      'hospital.sidebar-row': HospitalSidebarRow;
      'hospital.team-member': HospitalTeamMember;
    }
  }
}
