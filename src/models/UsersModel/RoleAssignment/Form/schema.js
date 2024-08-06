const schema = (userRoles) => ({
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
    site_id: {
      type: 'string',
      title: 'site',
    },
  },
});

export default schema;
