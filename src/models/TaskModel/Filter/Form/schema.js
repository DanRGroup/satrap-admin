const schema = ({ taskTypes, taskStatuses, operationTypes, materialTypes, shiftTypes }) => ({
  type: 'object',
  required: [],
  properties: {
    vehicle_ids: {
      type: 'string',
      title: 'vehicle',
    },
    site_ids: {
      type: 'string',
      title: 'site',
    },
    workshop_ids: {
      type: 'string',
      title: 'workshop',
    },
    driver_ids: {
      type: 'string',
      title: 'driver',
    },
    type_ids: {
      type: 'string',
      title: 'task_type',
      default: undefined,
      oneOf: taskTypes,
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
    operation_type_ids: {
      type: 'string',
      title: 'operation',
      // oneOf: operationTypes,
    },
    status_ids: {
      type: 'string',
      title: 'task_status',
      default: undefined,
      oneOf: taskStatuses,
    },
    min_created_at: {
      type: 'string',
      title: 'start_date',
      format: 'date',
    },
    max_created_at: {
      type: 'string',
      title: 'end_date',
      format: 'date',
    },
    match_location: {
      type: 'string',
      title: 'match_location',
      default: undefined,
      oneOf: [
        { const: '1', title: 'do' },
        { const: '0', title: 'dont' },
      ],
    },
  },
});

export default schema;
