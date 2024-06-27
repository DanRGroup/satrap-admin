import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'materialType',
    serviceName: 'graphql',
    query: gql`
      query materialType($ids: [String]) {
        materialType(ids: $ids) {
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
