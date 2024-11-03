const schema = (workshopStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    is_active: {
      type: 'number',
      title: 'activity',
      default: undefined,
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
      default: undefined,
      oneOf: workshopStatuses,
    },
    manager_ids: {
      type: 'string',
      title: 'workshop_manager',
    },
  },
});

export default schema;
