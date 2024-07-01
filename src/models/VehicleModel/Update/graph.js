import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'vehicle',
    serviceName: 'graphql',
    query: gql`
      query vehicle($ids: [String], $title: String) {
        vehicle(ids: $ids, title: $title) {
          data {
            id
            owner {
              id
              firstname
              lastname
            }
            driver {
              id
              firstname
              lastname
            }
            type {
              id
              title
            }
            serial_number
            plaque
            media {
              id
              full_url
            }
          }
          total
        }
      }
    `,
  },
  update: {
    name: 'updateVehicle',
    serviceName: 'auth',
    query: gql`
      mutation updateVehicle(
        $ids: [String]!
        $owner_id: String
        $driver_id: String
        $type_id: String
        $serial_number: String
        $plaque: String
        $details: String
      ) {
        updateVehicle(
          ids: $ids
          owner_id: $owner_id
          driver_id: $driver_id
          type_id: $type_id
          serial_number: $serial_number
          plaque: $plaque
          details: $details
        ) {
          messages
        }
      }
    `,
  },
};

export default schema;
