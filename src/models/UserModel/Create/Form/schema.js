const schema = (userTypes, userStatuses) => ({
  type: 'object',
  required: ['password', 'cellphone'],
  properties: {
    // type_id: {
    //   type: 'string',
    //   title: 'role',
    //   oneOf: userTypes,
    // },
    firstname: {
      type: 'string',
      title: 'firstname',
    },
    lastname: {
      type: 'string',
      title: 'lastname',
    },
    status_id: {
      type: 'string',
      title: 'status',
      oneOf: userStatuses,
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
    need_activation: {
      type: 'number',
      title: 'needActivation',
      oneOf: [
        { const: 1, title: 'do' },
        { const: 0, title: 'dont' },
      ],
    },
  },
});

export default schema;
