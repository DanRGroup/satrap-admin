const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    type_id: {
      type: 'string',
      title: 'role',
    },
    status_id: {
      type: 'string',
      title: 'status',
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
    cellphone: {
      type: 'string',
      title: 'cellphone',
      minLength: 9,
    },
    password: {
      type: 'string',
      title: 'password',
      minLength: 8,
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
