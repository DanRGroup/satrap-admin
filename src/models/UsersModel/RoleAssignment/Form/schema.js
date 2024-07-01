const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    role_id: {
      type: 'string',
      title: 'role',
    },
  },
});

export default schema;
