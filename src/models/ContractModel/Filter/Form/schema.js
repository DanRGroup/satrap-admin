const schema = (contractTypes, contractStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
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
    type_ids: {
      type: 'string',
      title: 'contract_type',
      default: undefined,
      oneOf: contractTypes,
    },
    workshop_ids: {
      type: 'string',
      title: 'workshop',
    },
    status: {
      type: 'string',
      title: 'status',
      default: undefined,
      oneOf: contractStatuses,
    },
    // number: {
    //   type: 'string',
    //   title: 'number',
    // },
    employer_ids: {
      type: 'string',
      title: 'natural_employer',
    },
    company_ids: {
      type: 'string',
      title: 'legal_employer',
    },
    category_ids: {
      type: 'string',
      title: 'contract_categories',
    },
  },
});

export default schema;
