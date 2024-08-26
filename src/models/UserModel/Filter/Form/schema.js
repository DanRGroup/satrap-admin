const schema = (userRoles, userStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    lastname: {
      type: 'string',
      title: 'lastname',
    },
    firstname: {
      type: 'string',
      title: 'firstname',
    },
    status_ids: {
      type: 'string',
      title: 'status',
      oneOf: userStatuses,
    },
    role_id: {
      type: 'string',
      title: 'role',
      oneOf: userRoles,
    },
  },
});

export default schema;
