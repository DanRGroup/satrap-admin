import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'vehicle',
    serviceName: 'graphql',
    query: gql`
      query vehicle($ids: [String], $title: String) {
        vehicle(ids: $ids, title: $title) {
          data {
            id
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
};

export default schema;
