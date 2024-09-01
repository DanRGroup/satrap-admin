const schema = (taskStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    site_id: {
      type: 'string',
      title: 'site',
    },
    status_id: {
      type: 'string',
      title: 'task_status',
      oneOf: taskStatuses,
    },
    start_time: {
      type: 'string',
      title: 'start_time',
      format: 'time',
    },
    end_time: {
      type: 'string',
      title: 'end_time',
      format: 'time',
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
    bill_number: {
      type: 'string',
      title: 'bill_number',
    },
    baskul: {
      type: 'string',
      title: 'baskul_amount',
    },
    tonnage: {
      type: 'string',
      title: 'tonnage',
    },
    description: {
      type: 'string',
      title: 'description',
    },
  },
});

export default schema;
