const schema = (siteTypes) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'site_title',
    },
    manager_id: {
      type: 'string',
      title: 'manager',
    },
    type_id: {
      type: 'string',
      title: 'site_type',
      oneOf: siteTypes,
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
      default: 1,
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
  },
});

export default schema;
