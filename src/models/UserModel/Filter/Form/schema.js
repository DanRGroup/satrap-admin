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
    cellphones: {
      type: 'string',
      title: 'cellphone',
      minLength: 11,
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
