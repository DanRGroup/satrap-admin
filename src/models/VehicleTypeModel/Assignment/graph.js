import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'vehicleTypes',
    serviceName: 'grapghql',
    query: gql`
      query vehicleTypes($ids: [String]) {
        vehicleTypes(ids: $ids) {
          data {
            id
            title
            media {
              full_url
            }
            producer {
              title
            }
          }
        }
      }
    `,
  },
};

export default schema;
