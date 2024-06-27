const schema = () => ({
  type: 'object',
  required: [],
  properties: {
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
    cellphone: {
      type: 'string',
      title: 'cellphone',
      minLength: 9,
    },
    birth_date: {
      type: 'string',
      title: 'birthDate',
      format: 'date',
    },
    address: {
      type: 'string',
      title: 'address',
    },
  },
});

export default schema;
