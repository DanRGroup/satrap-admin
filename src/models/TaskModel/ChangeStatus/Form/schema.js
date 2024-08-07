const schema = (taskStatusesRole) => ({
  type: 'object',
  required: [],
  properties: {
    status_id: {
      type: 'string',
      title: 'task_status',
      oneOf: taskStatusesRole,
    },
  },
});

export default schema;
