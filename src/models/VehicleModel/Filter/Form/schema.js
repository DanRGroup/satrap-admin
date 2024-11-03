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
    driver_ids: {
      type: 'string',
      title: 'driver',
    },
    status_ids: {
      type: 'string',
      title: 'vehicle_status',
      default: undefined,
      oneOf: vehicleStatuses,
    },
    type_ids: {
      type: 'string',
      title: 'vehicle_type',
      default: undefined,
      oneOf: vehicleTypes,
    },
  },
});

export default schema;
