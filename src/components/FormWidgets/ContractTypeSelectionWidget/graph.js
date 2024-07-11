import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'contractType',
    serviceName: 'graphql',
    query: gql`
      query contractType($ids: [String]) {
        contractType(ids: $ids) {
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
