const schema = (vehicleTypes, vehicleStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    serial_number: {
      type: 'string',
      title: 'serialNumber',
    },
    plaque: {
      type: 'string',
      title: 'plaque',
    },
    owner_ids: {
      type: 'string',
      title: 'owner',
    },
    driver_id: {
      type: 'string',
      title: 'driver',
    },
    status: {
      type: 'string',
      title: 'vehicle_status',
      oneOf: vehicleStatuses,
    },
    type_ids: {
      type: 'string',
      title: 'vehicle_type',
      oneOf: vehicleTypes,
    },
  },
});

export default schema;
