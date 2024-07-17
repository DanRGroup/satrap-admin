const schema = (workshopStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    // alias: {
    //   type: 'string',
    //   title: 'alias',
    // },
    // shipping_cost_config: {
    //   type: 'string',
    //   title: 'site_type',
    // },
    status_id: {
      type: 'string',
      title: 'status',
      oneOf: workshopStatuses,
    },
    manager_id: {
      type: 'string',
      title: 'workshop_manager',
    },
    location: {
      type: 'object',
      title: 'location',
      properties: {
        lat: {
          type: 'string',
        },
        lng: {
          type: 'string',
        },
      },
    },
    is_active: {
      type: 'number',
      title: 'activity',
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
  },
});

export default schema;
