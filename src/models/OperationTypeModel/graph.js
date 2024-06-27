import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'operationType',
    serviceName: 'graphql',
    query: gql`
      query operationType($ids: [String], $title: String) {
        operationType(ids: $ids, title: $title) {
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
