const schema = (siteTypes, siteStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    type_ids: {
      type: 'string',
      title: 'site_type',
      default: undefined,
      oneOf: siteTypes,
    },
    status: {
      type: 'string',
      title: 'site_status',
      default: undefined,
      oneOf: siteStatuses,
    },
    is_active: {
      type: 'number',
      title: 'activity',
      default: undefined,
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
  },
});

export default schema;
