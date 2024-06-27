import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'vehicleTypes',
    serviceName: 'graphql',
    query: gql`
      query vehicleTypes($ids: [String]) {
        vehicleTypes(ids: $ids) {
          data {
            media {
              id
              name
              full_url
              size
              collection_name
            }
          }
        }
      }
    `,
  },
};

export default schema;
