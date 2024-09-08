const schema = (userTypes, userStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    status_id: {
      type: 'string',
      title: 'status',
      oneOf: userStatuses,
    },
    firstname: {
      type: 'string',
      title: 'firstname',
    },
    lastname: {
      type: 'string',
      title: 'lastname',
    },
    national_code: {
      type: 'string',
      title: 'nationalCode',
    },
    username: {
      type: 'string',
      title: 'username',
    },
    birth_date: {
      type: 'string',
      title: 'birthDate',
      format: 'date',
    },
    is_active: {
      type: 'number',
      title: 'activity',
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
    address: {
      type: 'string',
      title: 'address',
    },
    email: {
      type: 'string',
      title: 'email',
      format: 'email',
    },
  },
});

export default schema;
