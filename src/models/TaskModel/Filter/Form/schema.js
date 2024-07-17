const schema = (taskTypes, operationTypes, materialTypes, shiftTypes) => ({
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
      oneOf: taskTypes,
    },
    operation_type_ids: {
      type: 'string',
      title: 'operation',
      oneOf: operationTypes,
    },

    material_type_ids: {
      type: 'string',
      title: 'material_type',
      oneOf: materialTypes,
    },
    shift_type_ids: {
      type: 'string',
      title: 'shift_type',
      oneOf: shiftTypes,
    },
    start_time: {
      type: 'string',
      title: 'start_time',
      format: 'time',
    },
    end_time: {
      type: 'string',
      title: 'end_time',
      format: 'time',
    },
  },
});

export default schema;
