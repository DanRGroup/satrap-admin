const schema = (vehicleTypes) => ({
  type: 'object',
  required: [],
  properties: {
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
      oneOf: vehicleTypes,
    },
    serial_number: {
      type: 'string',
      title: 'serialNumber',
    },
    plaque: {
      type: 'string',
      title: 'plaque',
      maxLength: 5,
    },
    details: {
      type: 'string',
      title: 'details',
    },
  },
});

export default schema;
