import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'operationType',
    serviceName: 'graphql',
    query: gql`
      query operationType($ids: [String]) {
        operationType(ids: $ids) {
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
