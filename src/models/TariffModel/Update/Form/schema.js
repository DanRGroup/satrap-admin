const schema = (taskTypes, operationTypes, materialTypes, shiftTypes) => ({
  type: 'object',
  required: [],
  properties: {
    task_type_id: {
      type: 'string',
      title: 'task_type',
      oneOf: taskTypes,
    },
    operation_type_id: {
      type: 'string',
      title: 'operation_type',
      // oneOf: operationTypes,
    },
    material_type_id: {
      type: 'string',
      title: 'material_type',
      // oneOf: materialTypes,
    },
    shift_type_id: {
      type: 'string',
      title: 'shift_type',
      // oneOf: shiftTypes,
    },
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    site_id: {
      type: 'string',
      title: 'site',
    },
    // creator_id: {
    //   type: 'string',
    //   title: 'creator',
    // },
    // updator_id: {
    //   type: 'string',
    //   title: 'updator',
    // },
    contract_id: {
      type: 'string',
      title: 'contract',
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
