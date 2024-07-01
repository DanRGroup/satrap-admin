import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'brand',
    serviceName: 'grapghql',
    query: gql`
      query brand($ids: [String]) {
        brand(ids: $ids) {
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
