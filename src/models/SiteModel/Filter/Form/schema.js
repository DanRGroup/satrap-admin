const schema = (siteTypes, siteStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    manager_ids: {
      type: 'string',
      title: 'site_manager',
    },
    type_ids: {
      type: 'string',
      title: 'site_type',
      oneOf: siteTypes,
    },
    status: {
      type: 'string',
      title: 'site_status',
      oneOf: siteStatuses,
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
