const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    workshop_ids: {
      type: 'string',
      title: 'workshop',
    },
    type_ids: {
      type: 'string',
      title: 'contract_type',
    },
  },
});

export default schema;
