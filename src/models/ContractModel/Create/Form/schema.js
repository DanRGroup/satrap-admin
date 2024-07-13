const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    type_id: {
      type: 'string',
      title: 'contract_type',
    },
    start_date: {
      type: 'string',
      title: 'start_date',
      format: 'date',
    },
    end_date: {
      type: 'string',
      title: 'end_date',
      format: 'date',
    },
    status: {
      type: 'string',
      title: 'status',
      oneOf: [
        { const: 'REGISTERED', title: 'registered' },
        { const: 'DOING', title: 'doing' },
        { const: 'DONED', title: 'done' },
        { const: 'SUSPENDED', title: 'suspend' },
        { const: 'CANCELED', title: 'canceled' },
      ],
    },
    cost: {
      type: 'string',
      title: 'cost',
    },
    number: {
      type: 'string',
      title: 'number',
    },
    details: {
      type: 'string',
      title: 'details',
    },
  },
});

export default schema;
