const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    demand_date: {
      type: 'string',
      title: 'demandDate',
      format: 'date',
    },
    description: {
      type: 'string',
      title: 'description',
    },
  },
});

export default schema;
