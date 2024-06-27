import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'vehicleTypes',
    serviceName: 'auth',
    query: gql`
      query vehicleTypes($ids: [String], $title: String) {
        vehicleTypes(ids: $ids, title: $title) {
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
