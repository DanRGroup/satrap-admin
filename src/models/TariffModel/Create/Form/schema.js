const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    task_type_id: {
      type: 'string',
      title: 'task_type',
    },
    operation_type_id: {
      type: 'string',
      title: 'operation_type',
    },
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    site_id: {
      type: 'string',
      title: 'site',
    },
    material_type_id: {
      type: 'string',
      title: 'material_type',
    },
    shift_type_id: {
      type: 'string',
      title: 'shift_type',
    },
    creator_id: {
      type: 'string',
      title: 'creator',
    },
    updator_id: {
      type: 'string',
      title: 'updator',
    },
    cost: {
      type: 'string',
      title: 'cost',
    },
    is_active: {
      type: 'number',
      title: 'activity',
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
    description: {
      type: 'string',
      title: 'details',
    },
  },
});

export default schema;
