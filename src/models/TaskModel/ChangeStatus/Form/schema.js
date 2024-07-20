const schema = (taskStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    status_id: {
      type: 'string',
      title: 'task_status',
      oneOf: taskStatuses,
    },
  },
});

export default schema;
