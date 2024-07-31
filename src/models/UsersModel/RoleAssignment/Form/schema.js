const schema = (userRoles) => ({
  type: 'object',
  required: [],
  properties: {
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    role_id: {
      type: 'string',
      title: 'role',
      oneOf: userRoles,
    },
  },
});

export default schema;
