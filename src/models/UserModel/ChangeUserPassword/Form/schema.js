export const schema = () => ({
  required: ['password'],
  type: 'object',
  properties: {
    password: {
      type: 'string',
      title: 'password',
      minLength: 8,
    },
  },
});
