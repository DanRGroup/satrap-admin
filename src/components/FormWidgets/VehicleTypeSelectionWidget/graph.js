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
};

export default schema;
