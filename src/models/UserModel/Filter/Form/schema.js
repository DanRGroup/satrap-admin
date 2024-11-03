const schema = (userRoles, userStatuses, userTypes) => ({
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
      default: undefined,
      oneOf: userStatuses,
    },
    role_id: {
      type: 'string',
      title: 'role',
      default: undefined,
      oneOf: userRoles,
    },

    type_ids: {
      type: 'string',
      title: 'type',
      default: undefined,
      oneOf: userTypes,
    },
  },
});

export default schema;
