import type { Core } from '@strapi/strapi';

/** Allow the Next.js site to read published hospital locations without an API token. */
export async function grantPublicHospitalRead(strapi: Core.Strapi) {
  try {
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });
    if (!publicRole) return;

    const actions = ['api::hospital.hospital.find', 'api::hospital.hospital.findOne'];

    for (const action of actions) {
      const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: {
          action,
          role: publicRole.id,
        },
      });
      if (existing) continue;

      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action,
          role: publicRole.id,
        },
      });
      strapi.log.info(`[seed] Public role granted ${action}`);
    }
  } catch (err) {
    strapi.log.warn(
      '[seed] Could not auto-grant public hospital permissions — enable in Admin → Settings → Users & Permissions → Public.',
      err,
    );
  }
}
