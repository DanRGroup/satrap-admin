import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'vehicle',
    serviceName: 'graphql',
    query: gql`
      query vehicle(
        $ids: [String]
        $plaque: String
        $owner_ids: [String]
        $driver_ids: [String]
        $serial_number: String
        $type_ids: [String]
        $status: String
      ) {
        vehicle(
          ids: $ids
          plaque: $plaque
          owner_ids: $owner_ids
          driver_ids: $driver_ids
          serial_number: $serial_number
          type_ids: $type_ids
          status: $status
        ) {
          data {
            id
            plaque
            serial_number
            type {
              id
              title
            }
            driver {
              firstname
              lastname
            }
            media {
              id
              full_url
            }
            vin
          }
          total
        }
      }
    `,
  },
};

export default schema;
