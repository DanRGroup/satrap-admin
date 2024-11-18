import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'contractType',
    serviceName: 'graphql',
    query: gql`
      query contractType($ids: [String]) {
        contractType(ids: $ids) {
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
