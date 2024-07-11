import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query workshop($ids: [String]) {
        workshop(ids: $ids) {
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
