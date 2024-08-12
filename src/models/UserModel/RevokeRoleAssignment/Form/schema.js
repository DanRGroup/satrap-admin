export const schema = (userRoles) => ({
  type: 'object',
  required: [],
  properties: {
    role_id: {
      type: 'string',
      title: 'role',
      oneOf: userRoles,
    },
  },
});

export const siteSchema = (userRoles) => ({
  type: 'object',
  required: [],
  properties: {
    role_id: {
      type: 'string',
      title: 'role',
      oneOf: userRoles,
    },
    site_id: {
      type: 'string',
      title: 'site',
    },
  },
});

export const workshopSchema = (userRoles) => ({
  type: 'object',
  required: [],
  properties: {
    role_id: {
      type: 'string',
      title: 'role',
      oneOf: userRoles,
    },
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
  },
});
