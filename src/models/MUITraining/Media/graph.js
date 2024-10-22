import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query workshop($ids: [String]) {
        workshop(ids: $ids) {
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
