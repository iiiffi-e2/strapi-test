import type { Core } from '@strapi/strapi';
import { grantPublicHospitalRead } from './bootstrap/grant-public-hospital';
import { seedHospitals } from './bootstrap/seed-hospitals';
import { grantPublicHomePageRead, seedHomePage } from './bootstrap/seed-home-page';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await seedHomePage(strapi);
    await seedHospitals(strapi);
    await grantPublicHomePageRead(strapi);
    await grantPublicHospitalRead(strapi);
  },
};
