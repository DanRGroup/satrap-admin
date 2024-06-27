import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'operationType',
    serviceName: 'grapghql',
    query: gql`
      query operationType($ids: [String]) {
        operationType(ids: $ids) {
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
