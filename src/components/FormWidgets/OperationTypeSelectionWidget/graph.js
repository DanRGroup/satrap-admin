import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'operationType',
    serviceName: 'graphql',
    query: gql`
      query operationType($ids: [String]) {
        operationType(ids: $ids) {
          data {
            id
            title
            media {
              id
              full_url
            }
          }
        }
      }
    `,
  },
};

export default schema;
