const schema = (contractTypes, contractStatuses) => ({
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
    employer_id: {
      type: 'string',
      title: 'employer',
    },
    type_id: {
      type: 'string',
      title: 'contract_type',
      oneOf: contractTypes,
    },
    status: {
      type: 'string',
      title: 'status',
      oneOf: contractStatuses,
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
