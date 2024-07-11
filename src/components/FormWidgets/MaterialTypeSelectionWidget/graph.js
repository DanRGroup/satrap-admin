import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'materialType',
    serviceName: 'graphql',
    query: gql`
      query materialType($ids: [String]) {
        materialType(ids: $ids) {
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
