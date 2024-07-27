const schema = () => ({
  type: 'object',
  // required: ['cellphone', 'password'],
  properties: {
    cellphone: {
      type: 'string',
      title: 'phone_number',
      default: '',
    },
    password: {
      type: 'string',
      title: 'password',
      default: '',
    },
  },
});

export default schema;
