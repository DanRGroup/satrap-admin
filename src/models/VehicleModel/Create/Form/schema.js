const schema = (vehicleTypes, vehicleStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    plaque: {
      type: 'string',
      title: 'plaque',
      // properties: {
      //   part1: {
      //     type: 'number',
      //     maxLength: 3,
      //   },
      //   part2: {
      //     type: 'number',
      //     maxLength: 2,
      //   },
      // },
    },
    owner_id: {
      type: 'string',
      title: 'owner',
    },
    driver_id: {
      type: 'string',
      title: 'driver',
    },
    type_id: {
      type: 'string',
      title: 'vehicle_type',
      default: undefined,
      oneOf: vehicleTypes,
    },
    status: {
      type: 'string',
      title: 'vehicle_status',
      default: undefined,
      oneOf: vehicleStatuses,
    },
    // serial_number: {
    //   type: 'string',
    //   title: 'serialNumber',
    // },
    // owner_type_id: {
    //   type: 'string',
    //   title: 'owner_type',
    //   oneOf: [
    //     { const: '1', title: 'natural' },
    //     { const: '2', title: 'legal' },
    //   ],
    //   default: '1',
    // },
    details: {
      type: 'string',
      title: 'details',
    },
  },
  // allOf: [
  //   {
  //     if: {
  //       properties: {
  //         owner_type_id: {
  //           oneOf: [{ const: '1' }],
  //         },
  //       },
  //     },
  //     then: {
  //       properties: {
  //         natural_owner_id: {
  //           type: 'string',
  //           title: 'natural_owner',
  //         },
  //       },
  //     },
  //   },
  //   {
  //     if: {
  //       properties: {
  //         owner_type_id: {
  //           oneOf: [{ const: '2' }],
  //         },
  //       },
  //     },
  //     then: {
  //       properties: {
  //         legal_owner_id: {
  //           type: 'string',
  //           title: 'legal_owner',
  //         },
  //       },
  //     },
  //   },
  // ],
});

export default schema;
