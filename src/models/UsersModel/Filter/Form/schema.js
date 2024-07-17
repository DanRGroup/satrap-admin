const schema = (userTypes, userStatuses) => ({
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
    type_ids: {
      type: 'string',
      title: 'role',
      oneOf: userTypes,
    },
  },
});

export default schema;
