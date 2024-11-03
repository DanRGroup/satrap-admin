const schema = (taskTypes, operationTypes, materialTypes, shiftTypes) => ({
  type: 'object',
  required: [],
  properties: {
    task_type_ids: {
      type: 'string',
      title: 'task_type',
      default: undefined,
      oneOf: taskTypes,
    },
    operation_type_ids: {
      type: 'string',
      title: 'operation_type',
      // oneOf: operationTypes,
    },
    material_type_ids: {
      type: 'string',
      title: 'material_type',
      // oneOf: materialTypes,
    },
    shift_type_ids: {
      type: 'string',
      title: 'shift_type',
      // oneOf: shiftTypes,
    },
    workshop_ids: {
      type: 'string',
      title: 'workshop',
    },
    site_ids: {
      type: 'string',
      title: 'site',
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
