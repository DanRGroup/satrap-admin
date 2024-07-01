import { gql } from '@apollo/client';

const schema = {
  create: {
    name: 'createVehicle',
    serviceName: 'auth',
    query: gql`
      mutation createVehicle(
        $owner_id: String
        $driver_id: String
        $type_id: String
        $serial_number: String
        $plaque: String
        $status: String
        $details: String
      ) {
        createVehicle(
          owner_id: $owner_id
          driver_id: $driver_id
          type_id: $type_id
          serial_number: $serial_number
          plaque: $plaque
          status: $status
          details: $details
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;
