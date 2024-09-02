import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'vehicleType',
    serviceName: 'graphql',
    query: gql`
      query vehicleType($ids: [String]) {
        vehicleType(ids: $ids) {
          data {
            id
            title
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
    name: 'updateVehicleType',
    serviceName: 'admin',
    query: gql`
      mutation updateVehicleType($ids: [String]!, $title: String!, $details: String) {
        updateVehicleType(ids: $ids, title: $title, details: $details) {
          messages
        }
      }
    `,
  },
};

export default schema;
