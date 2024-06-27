import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'contractTypes',
    serviceName: 'graphql',
    query: gql`
      query contractTypes($ids: [String]) {
        contractTypes(ids: $ids) {
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
