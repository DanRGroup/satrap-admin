import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'contractType',
    serviceName: 'graphql',
    query: gql`
      query contractType($ids: [String]) {
        contractType(ids: $ids) {
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
