const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    alias: {
      type: 'string',
      title: 'alias',
    },
    // shipping_cost_config: {
    //   type: 'string',
    //   title: 'site_type',
    // },
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
    manager_id: {
      type: 'string',
      title: 'manager',
    },
  },
});

export default schema;
