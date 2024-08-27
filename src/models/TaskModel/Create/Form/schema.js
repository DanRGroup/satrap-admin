const schema = (taskTypes, operationTypes, materialTypes, shiftTypes) => ({
  type: 'object',
  required: [],
  properties: {
    vehicle_id: {
      type: 'string',
      title: 'vehicle',
    },
    // driver_id: {
    //   type: 'string',
    //   title: 'driver',
    // },
    type_id: {
      type: 'string',
      title: 'task_type',
      oneOf: taskTypes,
    },
    operation_type_id: {
      type: 'string',
      title: 'operation',
      // oneOf: operationTypes,
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
      // oneOf: materialTypes,
    },
    shift_type_id: {
      type: 'string',
      title: 'shift_type',
      // oneOf: shiftTypes,
    },
    // status_id: {
    //   type: 'string',
    //   title: 'task_status',
    // },
    start_date: {
      type: 'string',
      title: 'start_date',
      format: 'date',
    },
    start_time: {
      type: 'string',
      title: 'start_time',
      format: 'time',
    },
    // end_time: {
    //   type: 'string',
    //   title: 'end_time',
    //   format: 'time',
    // },
    // end_date: {
    //   type: 'string',
    //   title: 'end_date',
    //   format: 'date',
    // },
    // stop_dueto: {
    //   type: 'string',
    //   title: 'stop_dueto',
    // },
    // cost: {
    //   type: 'string',
    //   title: 'cost',
    // },
    bill_number: {
      type: 'string',
      title: 'bill_number',
    },
    // baskul_cost: {
    //   type: 'string',
    //   title: 'baskul_cost',
    // },
    // supervisor_id: {
    //   type: 'string',
    //   title: 'supervisor',
    // },
    // creator_id: {
    //   type: 'string',
    //   title: 'creator',
    // },
    // updator_id: {
    //   type: 'string',
    //   title: 'updator',
    // },
    tonnage: {
      type: 'string',
      title: 'tonnage',
    },
    coefficient: {
      type: 'string',
      title: 'coefficient',
    },
    // have_food: {
    //   type: 'number',
    //   title: 'food_status',
    //   oneOf: [
    //     { const: 1, title: 'do' },
    //     { const: 0, title: 'dont' },
    //   ],
    // },
    description: {
      type: 'string',
      title: 'description',
    },
  },
});

export default schema;
