import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'vehicleType',
    serviceName: 'graphql',
    query: gql`
      query vehicleType($ids: [String], $title: String) {
        vehicleType(ids: $ids, title: $title) {
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
