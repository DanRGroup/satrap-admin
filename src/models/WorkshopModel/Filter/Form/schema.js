const schema = (workshopStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    is_active: {
      type: 'number',
      title: 'activity',
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
    title: {
      type: 'string',
      title: 'title',
    },
    status_ids: {
      type: 'string',
      title: 'status',
      oneOf: workshopStatuses,
    },
    manager_ids: {
      type: 'string',
      title: 'workshop_manager',
    },
  },
});

export default schema;
