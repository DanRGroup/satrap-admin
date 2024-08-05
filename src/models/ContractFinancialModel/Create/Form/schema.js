import { type } from '@testing-library/user-event/dist/type';

const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    contract_id: {
      type: 'string',
      title: 'contract',
    },
    cost: {
      type: 'string',
      title: 'cost',
    },
    repoted_in: {
      type: 'string',
      title: 'report_number',
    },
    description: {
      type: 'string',
      title: 'description',
    },
  },
});

export default schema;
